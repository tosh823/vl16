
function Canvas(canvas) {
    this.domElement = canvas;
    this.onLockChangeInstance = null;
}

Canvas.prototype.constructor = Canvas;

Canvas.prototype.setCallbacks = function (onEnterLock, onExitLock) {
    var onLockChange = function () {
        if (document.pointerLockElement === this.domElement || document.mozPointerLockElement === this.domElement) {
            if (onEnterLock != null) {
                onEnterLock();
            }
        }
        else {
            if (onExitLock != null) {
                onExitLock();
            }
        }
    };
    this.domElement.requestPointerLock = this.domElement.requestPointerLock || this.domElement.mozRequestPointerLock;
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

// Requesting pointer lock with given callbacks
Canvas.prototype.requestPointerLock = function (onEnterLock, onExitLock) {
    this.setCallbacks(onEnterLock, onExitLock);
    this.domElement.requestPointerLock();
};

// Assuming that we already requested pointer lock some time in the past
Canvas.prototype.enterPointerLock = function (onEnterLock) {
    this.domElement.requestPointerLock = this.domElement.requestPointerLock || this.domElement.mozRequestPointerLock;
    if (arguments.length > 0) {
        this.setCallbacks(onEnterLock, null);
    }
    this.domElement.requestPointerLock();
};

Canvas.prototype.exitPointerLock = function (onExitLock) {
    document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
    if (arguments.length > 0) {
        this.setCallbacks(null, onExitLock);
    }
    document.exitPointerLock();
};

module.exports = Canvas;