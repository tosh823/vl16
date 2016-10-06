var THREE = require('three');
var React = require('react');
var ReactDOM = require('react-dom');
var StuffDialog = require('./components/StuffDialog.jsx');

function Stuff(library, position, originObject) {
    THREE.Object3D.call(this);
    this.library = library;
    this.position.set(position.x, position.y, position.z);

    // Add some solid invisible object to interact with
    var boundingBox = new THREE.Box3().setFromObject(originObject);
    var size = boundingBox.getSize();
    var boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    var boxMaterial = new THREE.MeshBasicMaterial({
        visible: false
    });
    this.body = new THREE.Mesh(boxGeometry, boxMaterial);
    this.add(this.body);

    // Create invisible place as display
    var planeGeometry = new THREE.PlaneGeometry(window.innerWidth / 1000, window.innerHeight / 1000, 1, 1);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x4286f4,
        transparent: true,
        opacity: 0.5
    });
    this.display = new THREE.Mesh(planeGeometry, planeMaterial);
    this.add(this.display);
    this.display.translateY(1.3);
    this.display.rotateY(Math.PI);

    this.charOnKeyDownInstance = null;
}

Stuff.prototype = Object.create(THREE.Object3D.prototype);
Stuff.prototype.constructor = Stuff;

Stuff.prototype.interact = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui_modal'));

    this.library.canvas.exitPointerLock(null);
    this.library.avatar.disableFirstPersonControl();
    this.stuffDialog = ReactDOM.render(React.createElement(StuffDialog, {
        onClose: function () {
            this.library.canvas.enterPointerLock(null);
            this.library.avatar.enableFirstPersonControl();
            this.library.avatar.lookAt(this.display);
            this.library.setStandardViewCallbacks();
        }.bind(this),
        onMakeCall: function () {
            this.makeCall(document.getElementById('webcam'));
        }.bind(this)
    }), document.getElementById('ui_modal'));
    this.stuffDialog.show();
};

Stuff.prototype.update = function (delta, time) {

};

Stuff.prototype.makeCall = function (video) {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        function (stream) {
            // Render webcam video to panel
            var texture = new THREE.VideoTexture(video);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.format = THREE.RGBFormat;
            this.display.material = new THREE.MeshLambertMaterial({
                map: texture,
                color: 0xffffff
            });
            this.stream = stream;
            // Close modal
            this.stuffDialog.hide(false);
            // Look at display
            this.library.avatar.lookAt(this.display);
            // Set streaming
            if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
            }
            else {
                var vendorURL = window.URL || window.webkitURL;
                video.src = vendorURL.createObjectURL(stream);
            }
            this.charOnKeyDownInstance = this.chatOnKeyDown.bind(this);
            window.addEventListener('keydown', this.charOnKeyDownInstance, false);
            video.play();
        }.bind(this),
        function (err) {
            console.log("An error occured! " + err);
            if (this.charOnKeyDownInstance != null) window.removeEventListener('keydown', this.charOnKeyDownInstance, false);
        }
    );
};

Stuff.prototype.chatOnKeyDown = function (event) {
    if (event.key == 'Escape') {
        console.log('Escape was pressed');
        // Stop the stream
        this.stream.stop();
        // Entering point lock
        this.library.canvas.enterPointerLock(null);
        this.library.avatar.enableFirstPersonControl();
        this.library.avatar.lookAt(this.display);
        // Reset panel material
        var planeMaterial = new THREE.MeshBasicMaterial({
            color: 0x4286f4,
            transparent: true,
            opacity: 0.5
        });
        this.display.material = planeMaterial;
        this.library.setStandardViewCallbacks();
    }
};

module.exports = Stuff;