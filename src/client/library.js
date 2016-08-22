var THREE = require('three');
require('OrbitControls');
var Stats = require('stats');
var Avatar = require('./avatar');

var VIEW_MODE = {
    GLOBAL: 0,
    AVATAR: 1
};

var clock;

function Library(canvas) {
    this.scene = null;
    this.mainCamera = null;
    this.activeCamera = null;
    this.viewMode = VIEW_MODE.GLOBAL;
    this.controls = null;
    this.stats = null;
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.avatar = null;
    this.grounds = [];
    this.obstacles = [];
}

Library.prototype.constructor = Library;

Library.prototype.loadMainLibrary = function (progressCallback, finishCallback) {
    var loader = new THREE.ObjectLoader();
    var url = 'assets/Library.json';
    loader.load(url,
        function onLoad(object) {
            this.scene = object;
            // Set camera and renderer
            this.mainCamera = this.scene.getObjectByName("Camera");
            this.mainCamera.aspect = window.innerWidth / window.innerHeight;
            this.mainCamera.updateProjectionMatrix();
            this.activeCamera = this.mainCamera;
            this.renderer.setClearColor(this.scene.fog.color);
            // Set controls
            this.controls = new THREE.OrbitControls(this.mainCamera, this.canvas);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.25;
            this.controls.enableZoom = true;
            this.controls.minDistance = 10;
            this.controls.maxDistance = 100;
            this.controls.maxPolarAngle = Math.PI / 2.1;

            // Add colliders
            $.getJSON("assets/LibraryTags.json", function (json) {
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
            }.bind(this));

            // Create targets for spot lights
            $.getJSON("assets/LibraryLightsConfig.json", function (json) {
                if (json.spotlights !== undefined) {
                    $.each(json.spotlights, function(key, value) {
                        var spotLight = this.scene.getObjectByProperty('uuid', key);
                        var target = new THREE.Object3D();
                        target.position.set(value[0], value[1], value[2]);
                        spotLight.target = target;
                        this.scene.add(target);
                    }.bind(this));
                }
            }.bind(this));

            this.avatar = new Avatar(this, new THREE.Vector3(0, 2, 0));
            this.scene.add(this.avatar);

            window.addEventListener('resize', this.onWindowResize.bind(this), false);

            // Launch rendering cycle
            clock = new THREE.Clock();
            this.render();
            finishCallback();
        }.bind(this),
        function onProgress(progress) {
            progressCallback(progress.loaded, progress.total);
        },
        function onError(error) {
            console.log(error.message);
        }
    );
};

Library.prototype.initFrameRateUI = function () {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);
};

Library.prototype.render = function () {
    requestAnimationFrame(this.render.bind(this));
    // Update clock
    var elapsedTime = clock.getElapsedTime();
    var delta = clock.getDelta();
    // Update stuff
    this.controls.update();
    this.stats.update();
    this.avatar.update(delta);
    // Render stuff
    this.renderer.render(this.scene, this.activeCamera);
};

Library.prototype.changeView = function () {
    if (this.viewMode == VIEW_MODE.GLOBAL) {
        // Requesting Pointer Lock
        this.canvas.requestPointerLock = this.canvas.requestPointerLock || this.canvas.mozRequestPointerLock;
        var onLockChange = function () {
            if (document.pointerLockElement === this.canvas || document.mozPointerLockElement === this.canvas) {
                // Enter first person perspective
                this.viewMode = VIEW_MODE.AVATAR;
                this.activeCamera = this.avatar.camera;
                this.avatar.enableFirstPersonControl();
            }
            else {
                // Exit first person perspective
                // Change to global camera
                this.changeView();
            }
        };
        this.canvas.requestPointerLock();
        if ("onpointerlockchange" in document) {
            document.addEventListener('pointerlockchange', onLockChange.bind(this), false);
        } else if ("onmozpointerlockchange" in document) {
            document.addEventListener('mozpointerlockchange', onLockChange.bind(this), false);
        }
    }
    else {
        // Just in case, exiting pointer lock
        document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
        document.exitPointerLock();

        this.viewMode = VIEW_MODE.GLOBAL;
        this.activeCamera = this.mainCamera;
        this.avatar.disableFirstPersonControl();
    }
};

Library.prototype.onWindowResize = function () {
    this.activeCamera.aspect = window.innerWidth / window.innerHeight;
    this.activeCamera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
};

module.exports = Library;