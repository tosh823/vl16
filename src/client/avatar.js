var THREE = require('three');

function Avatar(library, position) {
    THREE.Object3D.call(this);
    // Set position and height
    this.library = library;
    this.position.set(position.x, position.y, position.z);
    this.height = position.y;

    // Create body
    var geometry = new THREE.SphereGeometry(0.4, 32, 32);
    var material = new THREE.MeshPhongMaterial();
    this.body = new THREE.Mesh(geometry, material);
    this.add(this.body);

    // Create camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.add(this.camera);

    // Instances of event listeners
    this.onMouseMoveEvent = null;
    this.onKeyDownEvent = null;
    this.onKeyUpEvent = null;

    this.enabled = false;

    // X - left/right motion
    // Z - forward/back motion
    this.moveVector = new THREE.Vector3(0, 0, 0);
    this.speed = 0.1;
    // Raycasters
    this.directionCaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, -1), 0, 1);
    this.groundCaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 3);
}

Avatar.prototype = Object.create(THREE.Object3D.prototype);
Avatar.prototype.constructor = Avatar;

Avatar.prototype.onMouseMove = function (event) {
    var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

    this.rotation.y -= movementX * 0.002;
    this.camera.rotation.x -= movementY * 0.002;
    this.camera.rotation.x = Math.max(- Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));
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
            break;
    }
};

Avatar.prototype.update = function (delta) {
    if (this.enabled) {
        // If direct control is enabled
        // Check collisions with obstacles
        this.checkGround();
        var canMoveInDirection = this.checkCollisions(this.moveVector);
        if (canMoveInDirection) {
            var xShift = this.moveVector.x * this.speed;
            var zShift = this.moveVector.z * this.speed;
            this.translateX(xShift);
            this.translateZ(zShift);
        }
    }
};

Avatar.prototype.checkCollisions = function (direction) {
    // Check walls and other standing objects
    // Rotate ray in corresponding direction
    var origin = new THREE.Vector3();
    origin.copy(this.position);
    origin.y -= 1;
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
        this.position.setY(closest.point.y + this.height);
    }
};

Avatar.prototype.enableFirstPersonControl = function () {
    this.onMouseMoveEvent = this.onMouseMove.bind(this);
    this.onKeyDownEvent = this.onKeyDown.bind(this);
    this.onKeyUpEvent = this.onKeyUp.bind(this);
    document.addEventListener('mousemove', this.onMouseMoveEvent, false);
    document.addEventListener('keydown', this.onKeyDownEvent, false);
    document.addEventListener('keyup', this.onKeyUpEvent, false);
    this.enabled = true;
};

Avatar.prototype.disableFirstPersonControl = function () {
    document.removeEventListener('mousemove', this.onMouseMoveEvent, false);
    document.removeEventListener('keydown', this.onKeyDownEvent, false);
    document.removeEventListener('keyup', this.onKeyUpEvent, false);
    this.enabled = false;
};


module.exports = Avatar;