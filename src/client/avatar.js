var THREE = require('three');
var React = require('react');
var ReactDOM = require('react-dom');
var Overlay = require('./components/Overlay.jsx');

function Avatar(library, position, rotation) {
    THREE.Object3D.call(this);
    // Set position and height
    this.library = library;
    this.position.set(position.x, position.y, position.z);
    this.height = position.y;

    // Create body
    this.psAttributes = {
        startSize: [],
        startPosition: [],
        randomness: []
    };
    var textureloader = new THREE.TextureLoader();
    textureloader.load('assets/textures/Spark.png',
        function (texture) {
            this.body = new THREE.Object3D();
            var particlesAmount = 50;
            var radiusRange = 0.4;
            var scaleBase = 0.4;
            var scaleDelta = 0.2;
            for (var i = 0; i < particlesAmount; i++) {
                var spriteMaterial = new THREE.SpriteMaterial({
                    map: texture,
                    color: 0xffffff,
                    blending: THREE.AdditiveBlending
                });
                var sprite = new THREE.Sprite(spriteMaterial);
                var scale = scaleBase + Math.random() * 2 * scaleDelta - scaleDelta;
                sprite.scale.set(scale, scale, 1.0);
                sprite.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
                sprite.position.setLength(radiusRange * Math.random());
                sprite.material.color.setHSL(Math.random(), 0.9, 0.7);
                this.psAttributes.startSize.push(sprite.scale.clone().x);
                this.psAttributes.startPosition.push(sprite.position.clone());
                this.psAttributes.randomness.push(Math.random() + 1);
                this.body.add(sprite);
            }
            this.body.translateY(-this.height / 4);
            this.add(this.body);
        }.bind(this)
    );

    // Create camera
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.6, 1000);
    this.add(this.camera);

    // UI
    this.overlay = null; // Reference to interface

    // Instances of event listeners
    this.onMouseMoveEvent = null;
    this.onMouseDownEvent = null;
    this.onMouseUpEvent = null;
    this.onClickEvent = null;
    this.onKeyDownEvent = null;
    this.onKeyUpEvent = null;

    this.enabled = false;
    this.uiShown = false; 
    this.cursorShown = false; // Store this flag in order to reduce overlay methods calls

    // X - left/right motion
    // Z - forward/back motion
    this.moveVector = new THREE.Vector3(0, 0, 0);
    this.speed = 0.1;
    // Raycasters
    this.directionCaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, -1), 0, 0.9);
    this.groundCaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 3);
}

Avatar.prototype = Object.create(THREE.Object3D.prototype);
Avatar.prototype.constructor = Avatar;

Avatar.prototype.onMouseMove = function (event) {
    if (this.enabled) {
        var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        this.rotation.y -= movementX * 0.002;
        this.camera.rotation.x -= movementY * 0.002;
        this.camera.rotation.x = Math.max(- Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));

        // Whenever we move camera, check possible interactable objects
        this.checkInteractables();
    }
};

Avatar.prototype.onKeyDown = function (event) {
    switch (event.keyCode) {
        case 38: // up
        case 87: // w
            this.moveVector.z = -1;
            break;
        case 37: // left
        case 65: // a
            this.moveVector.x = -1;
            break;
        case 40: // down
        case 83: // s
            this.moveVector.z = 1;
            break;
        case 39: // right
        case 68: // d
            this.moveVector.x = 1;
            break;
        case 32: // space
            break;
    }
};

Avatar.prototype.onKeyUp = function (event) {
    switch (event.keyCode) {
        case 38: // up
        case 87: // w
            this.moveVector.z = 0;
            break;
        case 37: // left
        case 65: // a
            this.moveVector.x = 0;
            break;
        case 40: // down
        case 83: // s
            this.moveVector.z = 0;
            break;
        case 39: // right
        case 68: // d
            this.moveVector.x = 0;
            break;
        case 32: // space
            if (this.uiShown) {
                // hide UI
                this.overlay.shift();
                this.uiShown = false;
                this.library.app.navBar.hide();
                this.library.canvas.enterPointerLock(null);
                this.library.setStandardViewCallbacks();
                this.enabled = true;
            }
            else {
                // show UI
                this.overlay.shift();
                this.uiShown = true;
                this.library.app.navBar.show();
                this.library.canvas.exitPointerLock(null);
                this.enabled = false;
            }
            break;
    }
};

// On Click event listener, check interactables and launch their action if present
Avatar.prototype.onClick = function (event) {
    if (event.button == 0) {
        // Left button click
        var raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 100);
        raycaster.setFromCamera(new THREE.Vector2(0.5, 0.5), this.camera);
        var intersections = raycaster.intersectObjects(this.library.interactable, false);
        if (intersections.length > 0) {
            intersections[0].object.parent.interact();
        }
    }
};

// On MouseDown event listener, switches cursor type
Avatar.prototype.onMouseDown = function (event) {
    if (event.button == 0) {
        if (this.cursorShown) {
            this.overlay.showGrabCursor();
        }
    }
};

// On MouseUp event listener, switches cursor type
Avatar.prototype.onMouseUp = function (event) {
    if (event.button == 0) {
        if (this.cursorShown) {
            this.overlay.showPointCursor();
        }
    }
};

// Method that checks if our focus reached any interactible object
Avatar.prototype.checkInteractables = function () {
    var raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 100);
    raycaster.setFromCamera(new THREE.Vector2(0.5, 0.5), this.camera);
    var intersections = raycaster.intersectObjects(this.library.interactable, false);
    if (intersections.length > 0) {
        if (!this.cursorShown) {
            this.overlay.showPointCursor();
            this.cursorShown = true;
        }
    }
    else {
        if (this.cursorShown) {
            this.overlay.hideCursor();
            this.cursorShown = false;
        }
    }
}

Avatar.prototype.update = function (delta, time) {
    if (this.enabled) {
        // If direct control is enabled
        // Check collisions with obstacles
        this.checkGround();
        var canMoveInDirection = this.checkCollisions(this.moveVector);
        if (canMoveInDirection) {
            // Multiply by delta for time-dependent movement rather then frame-dependent
            var xShift = this.moveVector.x * this.speed;
            var zShift = this.moveVector.z * this.speed;
            this.translateX(xShift);
            this.translateZ(zShift);
        }
    }
    this.animate(time);
};

Avatar.prototype.animate = function (time) {
    if (this.body === undefined) return;
    for (var i = 0; i < this.body.children.length; i++) {
        var sprite = this.body.children[i];
        var acceleration = this.psAttributes.randomness[i];
        var pulseFactor = Math.sin(acceleration * time);
        sprite.position.setX(this.psAttributes.startPosition[i].x * pulseFactor);
        sprite.position.setY(this.psAttributes.startPosition[i].y * pulseFactor);
        sprite.position.setZ(this.psAttributes.startPosition[i].z * pulseFactor);

        var scale = this.psAttributes.startSize[i] + pulseFactor * 0.1;
        sprite.scale.setX(scale);
        sprite.scale.setY(scale);
    }
};

Avatar.prototype.checkCollisions = function (direction) {
    // Check walls and other standing objects
    // Rotate ray in corresponding direction
    var origin = new THREE.Vector3();
    origin.copy(this.position);
    origin.y -= this.height / 1.8;
    this.directionCaster.ray.origin = origin;
    var matrix = new THREE.Matrix4();
    var vector = new THREE.Vector3();
    matrix.extractRotation(this.matrix);
    vector.copy(direction);
    this.directionCaster.ray.direction = vector.applyMatrix4(matrix);
    var intersections = this.directionCaster.intersectObjects(this.library.obstacles, true);
    if (intersections.length > 0) {
        var closest = intersections[0];
        var limit = 1;
        if (closest.distance <= limit) {
            return false;
        }
        else return true;
    }
    else return true;
};

Avatar.prototype.checkGround = function () {
    // Check ground
    this.groundCaster.ray.origin.copy(this.position);
    var intersections = this.groundCaster.intersectObjects(this.library.grounds, true);
    if (intersections.length > 0) {
        // Take closest
        var closest = intersections[0];
        var nextPosition = new THREE.Vector3();
        nextPosition.copy(this.position);
        nextPosition.y = closest.point.y + this.height;
        // Using lerp for smooth interpolation between heights
        this.position.lerp(nextPosition, 0.3);
    }
};

Avatar.prototype.lookAt = function (target) {
    this.camera.lookAt(target);
}

Avatar.prototype.enableFirstPersonControl = function () {
    if (this.enabled == true) return;
    this.onMouseMoveEvent = this.onMouseMove.bind(this);
    this.onMouseDownEvent = this.onMouseDown.bind(this);
    this.onMouseUpEvent = this.onMouseUp.bind(this);
    this.onKeyDownEvent = this.onKeyDown.bind(this);
    this.onKeyUpEvent = this.onKeyUp.bind(this);
    this.onClickEvent = this.onClick.bind(this);
    document.addEventListener('mousemove', this.onMouseMoveEvent, false);
    document.addEventListener('mousedown', this.onMouseDownEvent, false);
    document.addEventListener('mouseup', this.onMouseUpEvent, false);
    document.addEventListener('keydown', this.onKeyDownEvent, false);
    document.addEventListener('keyup', this.onKeyUpEvent, false);
    document.addEventListener('click', this.onClickEvent, false);

    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.overlay = ReactDOM.render(React.createElement(Overlay), document.getElementById('ui'));
    this.enabled = true;
};

Avatar.prototype.disableFirstPersonControl = function () {
    if (this.enabled == false) return;
    document.removeEventListener('mousemove', this.onMouseMoveEvent, false);
    document.removeEventListener('mousedown', this.onMouseDownEvent, false);
    document.removeEventListener('mouseup', this.onMouseUpEvent, false);
    document.removeEventListener('keydown', this.onKeyDownEvent, false);
    document.removeEventListener('keyup', this.onKeyUpEvent, false);
    document.removeEventListener('click', this.onClickEvent, false);

    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.enabled = false;
};


module.exports = Avatar;