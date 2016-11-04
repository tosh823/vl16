var Stats = require('stats');
var Avatar = require('./avatar');
var Stuff = require('./stuff');
var Pathfinder = require('./pathfinder');
var Warp = require('./warp');
var Canvas = require('./canvas');
var Client = require('./client');
var User = require('./user');
require('OrbitControls');
require('EffectComposer');
require('SkyShader');
require('RenderPass');
require('ShaderPass');
require('CopyShader');
require('HorizontalBlurShader');
require('VerticalBlurShader');

var VIEW_MODE = {
    ORBIT: 0,
    AVATAR: 1
};

function Library(app, canvas) {
    this.app = app;
    this.canvas = new Canvas(canvas);
    this.pathfinder = new Pathfinder(this);
    this.tundra = new Client();
    this.clock = new THREE.Clock();
    this.ready = false; // flag that used to decide, do we need to render a scene or not
    this.render();
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
}

Library.prototype.constructor = Library;

Library.prototype.cleanup = function () {
    this.scene = null;
    this.mainCamera = null;
    this.activeCamera = null;
    this.controls = null;
    this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas.domElement,
        alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer = new THREE.EffectComposer(this.renderer);
    this.viewMode = VIEW_MODE.ORBIT;
    this.grounds = [];
    this.obstacles = [];
    this.interactable = [];
    this.users = [];

    this.blurEnabled = false;
    this.ready = false;
};

Library.prototype.render = function () {
    requestAnimationFrame(this.render.bind(this));
    if (this.ready) {
        // Update clock
        var elapsedTime = this.clock.getElapsedTime();
        var delta = this.clock.getDelta();
        // Update stuff
        this.controls.update();
        if (this.stats != null) this.stats.update();
        if (this.users != null) this.users.map(function(user, index) {
            user.update(delta, elapsedTime);
        });
        //this.avatar.update(delta, elapsedTime);
        this.warp.update(delta, elapsedTime);
        // Render stuff
        if (this.blurEnabled) this.composer.render();
        else this.renderer.render(this.scene, this.activeCamera);
    }
};

Library.prototype.loadLibrary = function (location, progressCallback, loadCallback) {
    this.location = location;
    this.pathfinder.loadMap();
    var loader = new THREE.ObjectLoader();
    var sceneURL = 'assets/' + location.asset + '.json';
    loader.load(sceneURL,
        function onLoad(object) {
            this.cleanup();
            this.scene = object;
            this.mainCamera = this.scene.getObjectByName("Camera");
            this.activeCamera = this.mainCamera;
            this.configureEnvironment();
            this.configureInteractiveObjects();

            // Set OrbitControls
            this.configureControls();

            // Load existing users
            /*this.loadUsers();
            this.createAvatar();*/

            this.addStats();
            this.ready = true;

            loadCallback();
        }.bind(this),

        function onProgress(progress) {
            progressCallback(progress.loaded, progress.total);
        },

        function onError(error) {
            console.log('Error when loading scene ' + sceneURL + ' : ' + error.message);
        }
    );
};

Library.prototype.loadUsers = function() {
    var container = Tundra.scene.entityByName('Users');
    if (container != null) {
        // Scene already contains users, load them
        for (var i = 0; i < containter.children.length; i++) {
            var child  = containter.children[i];
            var user = new User(this, child);
            this.users.push(user);
            this.scene.add(user);
        }
    }
    else {
        // Scene doesn't contain users, create a container for them
        container = Tundra.scene.createEntity(0, [], AttributeChange.Default, false, false);
        container.setName('Users');
    }
};

Library.prototype.addUser = function(entity) {
    console.log('Adding new user...');
    var user = new User(this, entity);
    this.users.push(user);
    this.scene.add(user);
};

Library.prototype.removeUser = function(entity) {
    var found = null;
    for (var i = 0; i < this.users.length; i++) {
        if (entity.id == this.users[i].entity.id) {
            found = i;
            break;
        }
    }
    if (found != null) {
        this.users.splice(found, 1);
    }
};

Library.prototype.createAvatar = function () {
    var container = Tundra.scene.entityByName('Users');
    if (container == null) return;
    var newbie = container.createChild(0, AttributeChange.Default);
    var transform = newbie.createComponent("Placeable", 'Transform', AttributeChange.Default);
    var attr = transform.attribute('transform');
    var spawnPoint = this.scene.getObjectByName('SpawnPoint');
    attr.value.setPosition(spawnPoint.position.clone());
    attr.value.setRotation(spawnPoint.rotation.clone());
    attr.value.setScale(spawnPoint.scale.clone());
    
    this.avatar = new Avatar(this, newbie);
    this.users.push(this.avatar);
    this.scene.add(this.avatar);

    // Create callbacks
    Tundra.scene.onEntityCreated(this.addUser.bind(this));
    Tundra.scene.onEntityRemoved(this.removeUser.bind(this));
};

Library.prototype.configureControls = function () {
    this.controls = new THREE.OrbitControls(this.mainCamera, this.canvas.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 100;
    this.controls.maxPolarAngle = Math.PI / 2.1;
    this.controls.rotateSpeed = 0.2;
};

Library.prototype.configureEnvironment = function () {
    // Camera
    this.mainCamera.aspect = window.innerWidth / window.innerHeight;
    this.mainCamera.far = 2000000;
    this.mainCamera.updateProjectionMatrix();
    if (this.scene.fog != null) this.renderer.setClearColor(this.scene.fog.color);

    // Add HemisphereLight
    var hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    this.scene.add(hemiLight);

    // Add SkyShader
    var sky = new THREE.Sky();
    var uniforms = sky.uniforms;
    uniforms.turbidity.value = 2;
    uniforms.rayleigh.value = 2.333;
    uniforms.luminance.value = 1;
    uniforms.mieCoefficient.value = 0.005;
    uniforms.mieDirectionalG.value = 0.882;
    var sunPosition = new THREE.Vector3();
    var distance = 400000;
    var inclination = 0.335;
    var azimuth = 0.1514;
    var theta = Math.PI * (inclination - 0.5);
    var phi = 2 * Math.PI * (azimuth - 0.5);
    sunPosition.x = distance * Math.cos(phi);
    sunPosition.y = distance * Math.sin(phi) * Math.sin(theta);
    sunPosition.z = distance * Math.sin(phi) * Math.cos(theta);
    uniforms.sunPosition.value = sunPosition;
    this.scene.add(sky.mesh);
};

Library.prototype.configureInteractiveObjects = function () {
    // Find stuff bar to make it interactable
    var stuffBar = this.scene.getObjectByName("LibraryStuffBar1");
    if (stuffBar != null) {
        var stuffObject = new Stuff(this, new THREE.Vector3(stuffBar.position.x, stuffBar.position.y, stuffBar.position.z), stuffBar);
        stuffBar.parent.add(stuffObject);
        this.interactable.push(stuffObject.body);
    }

    // Create Warp to different dimension (other library)
    var warpPoint = this.scene.getObjectByName('WarpPoint');
    this.warp = new Warp(this, new THREE.Vector3(warpPoint.position.x, location.avatarLift, warpPoint.position.z), warpPoint.rotation.clone());
    this.scene.add(this.warp);
    this.interactable.push(this.warp.body);
};

Library.prototype.loadCollisionData = function () {
    var sceneTagsURL = 'assets/' + this.location.asset + 'Tags.json';
    $.getJSON(sceneTagsURL,
        function onSuccess(json) {
            if (json.tags !== undefined) {
                if (json.tags.Ground !== undefined) {
                    for (var g = 0; g < json.tags.Ground.length; g++) {
                        this.grounds.push(this.scene.getObjectByProperty('uuid', json.tags.Ground[g]));
                    }
                }
                if (json.tags.Collider !== undefined) {
                    for (var c = 0; c < json.tags.Collider.length; c++) {
                        this.obstacles.push(this.scene.getObjectByProperty('uuid', json.tags.Collider[c]));
                    }
                }
            }
        }.bind(this)
    );
};

Library.prototype.loadLightData = function () {
    var sceneLightsURL = 'assets/' + location.asset + 'LightsConfig.json';
    $.getJSON(sceneLightsURL,
        function onSuccess(json) {
            if (json.spotlights !== undefined) {
                $.each(json.spotlights, function (key, value) {
                    var spotLight = this.scene.getObjectByProperty('uuid', key);
                    var target = new THREE.Object3D();
                    target.position.set(value[0], value[1], value[2]);
                    spotLight.target = target;
                    this.scene.add(target);
                }.bind(this));
            }
        }.bind(this)
    );
};

Library.prototype.addStats = function () {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    // Place the fps metter in the left bottom
    this.stats.dom.style.top = 'auto';
    this.stats.dom.style.left = '0px';
    this.stats.dom.style.bottom = '0px';
    document.body.appendChild(this.stats.dom);
};

Library.prototype.enableBlur = function () {
    // Recreate composer
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.addPass(new THREE.RenderPass(this.scene, this.mainCamera));
    // Add horizontal blur shader
    var hblur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
    this.composer.addPass(hblur);
    // Add vertical blur shader
    var vblur = new THREE.ShaderPass(THREE.VerticalBlurShader);
    vblur.renderToScreen = true;
    this.composer.addPass(vblur);

    this.blurEnabled = true;
};

Library.prototype.disableBlur = function () {
    this.blurEnabled = false;
};

Library.prototype.findPath = function (destination) {
    // Remove previously drawn path if existed
    if (this.path != null) this.scene.remove(this.path);

    // Find closest to avatar waypoint
    var closestWayPoint = this.getClosestWayPoint();
    if (closestWayPoint == null) return;

    var route = this.pathfinder.findPath(closestWayPoint.name, destination);
    var lineGeometry = new THREE.Geometry();
    for (var i = 0; i < route.length; i++) {
        var wayPoint = this.scene.getObjectByName(route[i]);
        lineGeometry.vertices.push(wayPoint.position.clone());
    }
    var lineMaterial = new THREE.LineDashedMaterial({
        color: 0x4286f4,
        scale: 1,
        dashSize: 3,
        gapSize: 1,
        fog: true
    });
    lineGeometry.computeLineDistances();
    this.path = new THREE.Line(lineGeometry, lineMaterial);
    this.scene.add(this.path);
};

Library.prototype.getClosestWayPoint = function () {
    var navigation = this.scene.getObjectByName('Navigation');
    var avatarPos = this.avatar.position.clone();
    var minDistance = Number.MAX_SAFE_INTEGER;
    var closestWayPoint = null;
    for (var i = 0; i < navigation.children.length; i++) {
        var distance = navigation.children[i].position.distanceTo(avatarPos);
        if (distance < minDistance) {
            closestWayPoint = navigation.children[i];
            minDistance = distance;
        }
    }
    console.log('Closest point is ' + closestWayPoint.name);
    return closestWayPoint;
};

Library.prototype.switchViewMode = function () {
    if (this.viewMode == VIEW_MODE.ORBIT) {
        // Requesting Pointer Lock
        this.canvas.requestPointerLock(
            function onEnterLock() {
                this.viewAvatarMode();
            }.bind(this),
            function onExitLock() {
                this.viewOrbitMode();
            }.bind(this)
        );
    }
    else {
        this.viewOrbitMode();
    }
};

Library.prototype.viewOrbitMode = function () {
    this.app.navBar.show();
    this.viewMode = VIEW_MODE.ORBIT;
    this.activeCamera = this.mainCamera;
    this.avatar.disableFirstPersonControl();
};

Library.prototype.viewAvatarMode = function () {
    this.app.navBar.hide();
    this.viewMode = VIEW_MODE.AVATAR;
    this.activeCamera = this.avatar.camera;
    this.avatar.enableFirstPersonControl();
};

Library.prototype.setStandardViewCallbacks = function () {
    this.canvas.setCallbacks(
        function onEnterLock() {
            this.viewAvatarMode();
        }.bind(this),
        function onExitLock() {
            this.viewOrbitMode();
        }.bind(this)
    );
};

Library.prototype.onWindowResize = function () {
    if (this.renderer != null && this.activeCamera != null) {
        this.activeCamera.aspect = window.innerWidth / window.innerHeight;
        this.activeCamera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
};

module.exports = Library;