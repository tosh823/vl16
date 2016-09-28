var THREE = require('three');
var React = require('react');
var ReactDOM = require('react-dom');
var WebCam = require('./components/WebCam.jsx');

function Stuff(library, position, originObject) {
    THREE.Object3D.call(this);
    this.library = library;
    this.position.set(position.x, position.y, position.z);

    // Add some solid invisible object to interact with
    var boundingBox = new THREE.Box3().setFromObject(originObject);
    var size = boundingBox.size();
    var boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    var boxMaterial = new THREE.MeshBasicMaterial({
        visible: false
    });
    this.body = new THREE.Mesh(boxGeometry, boxMaterial);
    this.add(this.body);

    // Create invisible place as display
    var planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x4286f4,
        transparent: true,
        opacity: 0.5
    });
    this.display = new THREE.Mesh(planeGeometry, planeMaterial);
    this.add(this.display);
    this.display.translateY(2);
    this.display.rotateY(Math.PI);
}

Stuff.prototype = Object.create(THREE.Object3D.prototype);
Stuff.prototype.constructor = Stuff;

Stuff.prototype.interact = function () {
    console.log("Interaction with StuffBar");
    ReactDOM.unmountComponentAtNode(document.getElementById('webcam'));
    var webcamComponent = ReactDOM.render(React.createElement(WebCam), document.getElementById('webcam'));
}

Stuff.prototype.update = function (delta, time) {
    
};

module.exports = Stuff;