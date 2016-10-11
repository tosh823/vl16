var Stats = require('stats');
var Avatar = require('./avatar');
var Stuff = require('./stuff');
var Warp = require('./warp');
var Canvas = require('./canvas');
var THREE = require('three');
//var Client = require('./client');
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

var clock;

function Library(app, canvas) {
    this.app = app;
    this.canvas = new Canvas(canvas);
    // ready - flag that used to decide, do we need to render a scene or not
    this.ready = false;
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
    this.render();
    //var client = new Client();
}

Library.prototype.constructor = Library;

Library.prototype.loadLibrary = function (location, progressCallback, loadCallback) {
    this.location = location;
    var loader = new THREE.ObjectLoader();
    var sceneURL = 'assets/' + location.asset + '.json';
    loader.load(sceneURL,
        function onLoad(object) {
            this.cleanup();
            this.scene = object;
            // Set Camera and Renderer
            this.mainCamera = this.scene.getObjectByName("Camera");
            this.mainCamera.aspect = window.innerWidth / window.innerHeight;
            this.mainCamera.far = 2000000;
            this.mainCamera.updateProjectionMatrix();
            this.activeCamera = this.mainCamera;
            if (this.scene.fog != null) this.renderer.setClearColor(this.scene.fog.color);
            // Set OrbitControls
            this.controls = new THREE.OrbitControls(this.mainCamera, this.canvas.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.25;
            this.controls.enableZoom = true;
            this.controls.minDistance = 10;
            this.controls.maxDistance = 100;
            this.controls.maxPolarAngle = Math.PI / 2.1;
            this.controls.rotateSpeed = 0.2;

            var sceneTagsURL = 'assets/' + location.asset + 'Tags.json';
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

            // Spawn an Avatar
            var spawnPoint = this.scene.getObjectByName('SpawnPoint');
            this.avatar = new Avatar(this, new THREE.Vector3(spawnPoint.position.x, location.avatarLift, spawnPoint.position.z), spawnPoint.rotation.clone());
            this.scene.add(this.avatar);

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

            // Creare HemisphereLight
            var hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
            this.scene.add(hemiLight);

            // Create SkyShader
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

            // Launch rendering cycle
            clock = new THREE.Clock();
            //this.initFrameRateUI();
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

Library.prototype.cleanup = function () {
    this.ready = false;
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

    this.blurEnabled = false;
};

Library.prototype.initFrameRateUI = function () {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);
};

Library.prototype.render = function () {
    requestAnimationFrame(this.render.bind(this));
    if (this.ready) {
        // Update clock
        var elapsedTime = clock.getElapsedTime();
        var delta = clock.getDelta();
        // Update stuff
        this.controls.update();
        //this.stats.update();
        this.avatar.update(delta, elapsedTime);
        this.warp.update(delta, elapsedTime);
        // Render stuff
        if (this.blurEnabled) {
            this.composer.render();
        }
        else this.renderer.render(this.scene, this.activeCamera);
    }
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
    this.viewMode = VIEW_MODE.ORBIT;
    this.activeCamera = this.mainCamera;
    this.avatar.disableFirstPersonControl();
};

Library.prototype.viewAvatarMode = function () {
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