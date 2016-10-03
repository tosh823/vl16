
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
        console.log(document.mozPointerLockElement);
        if (document.pointerLockElement === this.domElement || document.mozPointerLockElement === this.domElement) {
            if (onEnterLock != null) onEnterLock();
        }
        else {
            if (onExitLock != null) onExitLock();
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
    this.domElement.requestPointerLock();
};

// Assuming that we already requested pointer lock some time in the past
Canvas.prototype.enterPointerLock = function (recoverListener = false) {
    // If we have deleted listeners when exiting last time
    // we might want to enable it again
    this.domElement.requestPointerLock = this.domElement.requestPointerLock || this.domElement.mozRequestPointerLock;
    this.domElement.requestPointerLock();
    if (recoverListener == true) this.addExistingListener();
};

Canvas.prototype.exitPointerLock = function (removeListener = false) {
    // We might want to just exit the lock without invoking listeneres
    // Be aware that this removes them from listening
    // so you have to add them again if needed
    document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
    document.exitPointerLock();
    if (removeListener == true) this.removeExistingListener();
};

// Removes existing listeners of onChange event
Canvas.prototype.removeExistingListener = function() {
    if (this.onLockChangeInstance != null) {
        if ("onpointerlockchange" in document) {
            document.removeEventListener('pointerlockchange', this.onLockChangeInstance, false);
        }
        else if ("onmozpointerlockchange" in document) {
            document.removeEventListener('mozpointerlockchange', this.onLockChangeInstance, false);
        }   
    }     
};

// Reestablish listening to onChange event with existing callbacks
Canvas.prototype.addExistingListener = function() {
    if (this.onLockChangeInstance != null) {
        if ("onpointerlockchange" in document) {
            document.addEventListener('pointerlockchange', this.onLockChangeInstance, false);
        }
        else if ("onmozpointerlockchange" in document) {
            document.addEventListener('mozpointerlockchange', this.onLockChangeInstance, false);
        }   
    }
};

module.exports = Canvas;