var Stats = require('stats');
var Avatar = require('./avatar');
var Stuff = require('./stuff');
var Pathfinder = require('./pathfinder');
var Warp = require('./warp');
var Canvas = require('./canvas');
var Client = require('./client');
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
    this.tundra = new Client(
        function onConnected() {
            this.disableBlur();
            // Hook to server's events
            Tundra.scene.onEntityCreated(this, this.addUserPresence.bind(this));
            Tundra.scene.onEntityRemoved(this, this.removeUserPresence.bind(this));
            Tundra.scene.onEntityAction(this, this.onEntityAction.bind(this));
        }.bind(this),
        function onDisconnected() {
            this.localOnly = true;
        }.bind(this),
        function onError(error) {
            this.disableBlur();
            this.createOfflinePresence();
            this.localOnly = true;
        }.bind(this)
    );
    this.clock = new THREE.Clock();
    this.ready = false; // flag that used to decide, do we need to render a scene or not
    this.localOnly = false;
    this.render();
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
}

Library.prototype.constructor = Library;

Library.prototype.cleanup = function () {
    // If we not the first time, remove created objects
    if (this.scene != null) {
        // Remove own avatar
        this.scene.remove(this.avatar);
        // Remove user object from scene
        this.users.map(function (user) {
            this.scene.remove(user);
        }.bind(this));
        // Remove interactive objects
        this.interactable.map(function (item) {
            this.scene.remove(item.parent);
        }.bind(this));
    }
    // Reset renderer and post-effect composer
    this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas.domElement,
        alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer = new THREE.EffectComposer(this.renderer);
    this.viewMode = VIEW_MODE.ORBIT;
    // Empty all arrays
    this.grounds = [];
    this.obstacles = [];
    this.interactable = [];
    this.users = [];
    // Reset all flags and objects
    this.blurEnabled = false;
    this.ready = false;
    this.avatar = null;
    this.mainCamera = null;
    this.activeCamera = null;
    this.controls = null;
    this.scene = null;
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
        if (this.users != null) this.users.map(function (user, index) {
            user.animate(elapsedTime);
        });
        if (this.avatar != null) this.avatar.update(delta, elapsedTime);
        this.warp.update(delta, elapsedTime);
        // Render stuff
        if (this.blurEnabled) this.composer.render();
        else this.renderer.render(this.scene, this.activeCamera);
    }
};

Library.prototype.loadLibrary = function (location, progressCallback, loadCallback) {
    this.location = location;
    this.pathfinder.loadMap();
    if (this.tundra.online) this.avatar.emitLocationChange();
    var sceneURL = 'assets/' + location.asset + '.json';
    var loader = new THREE.ObjectLoader();
    loader.load(sceneURL,
        function onLoad(object) {
            this.cleanup();
            this.scene = object;
            this.mainCamera = this.scene.getObjectByName("Camera");
            this.activeCamera = this.mainCamera;

            // Load collisions and configure things
            this.loadCollisionData();
            this.configureEnvironment();
            this.configureInteractiveObjects();

            // Set OrbitControls
            this.configureControls();

            // If we connected to server, load peers in this location
            if (this.tundra.online) this.loadUsers();
            if (this.localOnly) this.createOfflinePresence();

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

Library.prototype.createOfflinePresence = function () {
    this.avatar = new Avatar(this, null, true);
    this.scene.add(this.avatar);
};

Library.prototype.addUserPresence = function (entity, atSpawn = false) {
    // Add user if only he is in the same location as we
    if (entity.group == this.location.asset) {
        if (this.isClient(entity.name)) {
            this.avatar = new Avatar(this, entity, true);
            this.scene.add(this.avatar);
        }
        else {
            var avatar = new Avatar(this, entity, atSpawn);
            this.users.push(avatar);
            this.scene.add(avatar);
        }
        console.log(entity.name + ' joined ' + this.location.asset + ' location');
    }
};

Library.prototype.removeUserPresence = function (entity) {
    if (this.isClient(entity.name)) {
        this.scene.remove(this.avatar);
        this.avatar = null;
        console.log(entity.name + ' left ' + this.location.asset + ' location');
    }
    else {
        var found = this.findUserPresence(entity);
        if (found != null) {
            this.scene.remove(this.users[found]);
            this.users.splice(found, 1);
            console.log(entity.name + ' left ' + this.location.asset + ' location');
        }
    }
};

Library.prototype.findUserPresence = function (entity) {
    var found = null;
    for (var i = 0; i < this.users.length; i++) {
        if (entity.id == this.users[i].entity.id) {
            found = i;
            break;
        }
    }
    return found;
};

Library.prototype.updateUserPresence = function (action) {
    if (action.entity.group != this.location.asset || this.isClient(action.entity.name)) return;
    var found = this.findUserPresence(action.entity);
    if (found != null) {
        var data = JSON.parse(action.parameters[0]);
        this.users[found].position.set(data.posX, data.posY, data.posZ);
    }
};

Library.prototype.onEntityAction = function (action) {
    switch (action.name) {
        case 'userUpdated':
            this.updateUserPresence(action);
            break;
        case 'userChangedLocation':
            var data = JSON.parse(action.parameters[0]);
            if (data.to == this.location.asset) {
                // user entered location
                if (!this.isClient(action.entity.name)) this.addUserPresence(action.entity, true);
            }
            else if (data.from == this.location.asset) {
                // user left location
                this.removeUserPresence(action.entity);
            }
            break;
    }
};

Library.prototype.isClient = function (entityName) {
    var clientName = 'User-' + this.tundra.client.connectionId;
    if (entityName == clientName) return true;
    else return false;
};

Library.prototype.loadUsers = function () {
    // Load other existing users in this location
    for (var i = 0; i < Tundra.scene.entities.length; i++) {
        var entity = Tundra.scene.entities[i];
        this.addUserPresence(entity);
    }
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

Library.prototype.getSpawnPoint = function () {
    var spawnPoint = this.scene.getObjectByName('SpawnPoint');
    return spawnPoint.position.clone();
};

Library.prototype.findBookShelf = function (book) {
    var shelf = this.pathfinder.findShelf(book);
    return shelf;
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
        var position = wayPoint.position.clone();
        lineGeometry.vertices.push(position);
    }
    var lineMaterial = new THREE.LineDashedMaterial({
        color: 0x4286f4,
        scale: 1,
        dashSize: 0.5,
        gapSize: 0.2,
        fog: true
    });
    lineGeometry.computeLineDistances();
    this.path = new THREE.Line(lineGeometry, lineMaterial);
    this.scene.add(this.path);
    setTimeout(function() {
        if (this.path != null) this.scene.remove(this.path);
    }.bind(this), 60000);
};

Library.prototype.getClosestWayPoint = function () {
    var navigation = this.scene.getObjectByName('Navigation');
    var avatarPos = this.avatar.position.clone();
    var minDistance = Number.MAX_SAFE_INTEGER;
    var closestWayPoint = null;
    for (var i = 0; i < navigation.children.length; i++) {
        var floor = navigation.children[i];
        for (var j = 0; j < floor.children.length; j++) {
            var distance = floor.children[j].position.distanceTo(avatarPos);
            if (distance < minDistance) {
                closestWayPoint = floor.children[j];
                minDistance = distance;
            }
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