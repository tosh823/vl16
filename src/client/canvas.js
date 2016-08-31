
function Canvas(canvas) {
    this.domElement = canvas;
    this.onLockChangeInstance = null;
}

Canvas.prototype.constructor = Canvas;

// Requesting pointer lock with given callbacks
Canvas.prototype.requestPointerLock = function (onEnterLock, onExitLock) {
    if (arguments.length == 0) {
        // If we don' provide callbacks
        // let's assume that we just want to enable pointer lock with old ones
        return this.enterPointerLock();
    }
    var onLockChange = function () {
        if (document.pointerLockElement === this.domElement || document.mozPointerLockElement === this.domElement) {
            if (onEnterLock != null) onEnterLock();
        }
        else {
            if (onExitLock != null) onExitLock();
        }
    };
    this.domElement.requestPointerLock = this.domElement.requestPointerLock || this.domElement.mozRequestPointerLock;
    this.domElement.requestPointerLock();
    if ("onpointerlockchange" in document) {
        // General case
        if (this.onLockChangeInstance != null) {
            // Remove old listener if exists
            document.removeEventListener('pointerlockchange', this.onLockChangeInstance, false);
        }
        // Add new listener
        this.onLockChangeInstance = onLockChange.bind(this);
        document.addEventListener('pointerlockchange', this.onLockChangeInstance, false);
    } 
    else if ("onmozpointerlockchange" in document) {
        // Mozilla vendor case, duhh...
        if (this.onLockChangeInstance != null) {
            // Remove old listener if exists
            document.removeEventListener('mozpointerlockchange', this.onLockChangeInstance, false);
        }
        // Add new listener
        this.onLockChangeInstance = onLockChange.bind(this);
        document.addEventListener('mozpointerlockchange', this.onLockChangeInstance, false);
    }
};

// Assuming that we already requested pointer lock in the past
// Enter it again without deleting previous callbacks
Canvas.prototype.enterPointerLock = function () {
    this.domElement.requestPointerLock = this.domElement.requestPointerLock || this.domElement.mozRequestPointerLock;
    this.domElement.requestPointerLock();
};

Canvas.prototype.exitPointerLock = function () {
    document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
    document.exitPointerLock();
};

module.exports = Canvas;