var THREE = require('three');
var React = require('react');
var ReactDOM = require('react-dom');
var LocationDialog = require('./components/LocationDialog.jsx');

function Warp(library, position, rotation) {
    THREE.Object3D.call(this);
    this.library = library;
    this.position.set(position.x, position.y, position.z);
    this.rotation.set(rotation.x, rotation.y, rotation.z);

    // Create body of the warp vortex
    this.psAttributes = {
        startSize: [],
        startPosition: [],
        randomness: [],
        radius: []
    };
    var textureloader = new THREE.TextureLoader();
    textureloader.load('assets/textures/Spark.png',
        function (texture) {
            this.vortex = new THREE.Object3D();
            var depth = 8;
            var radius = 0.6 * position.y;
            var inBetween = 1 / 6;
            var particlesAmount = 300;
            var particlesOnTurn = particlesAmount / depth;
            var scaleBase = 0.5;
            var scaleDelta = 0.2;
            for (var turn = 0; turn < depth; turn++) {
                for (var i = 0; i < particlesOnTurn; i++) {
                    var turnRadius = radius - (turn * (radius / depth));
                    var spriteMaterial = new THREE.SpriteMaterial({
                        map: texture,
                        color: 0xffffff,
                        blending: THREE.AdditiveBlending
                    });
                    var sprite = new THREE.Sprite(spriteMaterial);
                    var scale = scaleBase + 2 * scaleDelta * Math.random() - scaleDelta;
                    sprite.scale.set(scale, scale, 1.0);

                    sprite.position.setZ(2 * Math.random() - 1);
                    sprite.position.setLength(turnRadius * Math.random());
                    sprite.position.setY(Math.sqrt(turnRadius * turnRadius - sprite.position.z * sprite.position.z));
                    sprite.position.setX(turn * inBetween);

                    sprite.material.color.setHSL(0.58, Math.random(), 0.5);

                    this.psAttributes.startSize.push(sprite.scale.clone().x);
                    this.psAttributes.startPosition.push(sprite.position.clone());
                    this.psAttributes.randomness.push(Math.random() + 1);
                    this.psAttributes.radius.push(turnRadius);
                    this.vortex.add(sprite);
                }
            }
            this.vortex.translateX(-(depth / 2) * inBetween);
            this.add(this.vortex);

        }.bind(this)
    );
    // Add some solid invisible object to interact with
    var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        visible: false
    });
    this.body = new THREE.Mesh(boxGeometry, material);
    this.add(this.body);
}

Warp.prototype = Object.create(THREE.Object3D.prototype);
Warp.prototype.constructor = Warp;

Warp.prototype.interact = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui_modal'));
    this.library.canvas.exitPointerLock(true);
    this.library.avatar.disableFirstPersonControl();
    var modal = ReactDOM.render(React.createElement(LocationDialog, {
        onClose: function() {
            this.library.canvas.enterPointerLock(true);
        }.bind(this),
        onSubmit: function(selectedLocation) {
            this.library.canvas.addExistingListener();
            if (selectedLocation != null) this.library.app.loadLocationAsAvatar(selectedLocation);
        }.bind(this)
    }), document.getElementById('ui_modal'));
    modal.show(this.library.location);
};

Warp.prototype.update = function (delta, time) {
    this.animate(time);
};

Warp.prototype.animate = function (time) {
    if (this.vortex === undefined) return;
    for (var i = 0; i < this.vortex.children.length; i++) {
        var sprite = this.vortex.children[i];
        var acceleration = this.psAttributes.randomness[i];
        var turnRadius = this.psAttributes.radius[i];
        var pulseFactor = Math.sin(acceleration * time);
        sprite.position.setZ(this.psAttributes.startPosition[i].z * pulseFactor);
        var foo = ((pulseFactor > 0) ? 1 : -1);
        sprite.position.setY(foo * Math.sqrt(turnRadius * turnRadius - sprite.position.z * sprite.position.z));

        var scale = this.psAttributes.startSize[i] + pulseFactor * 0.1;
        sprite.scale.setX(scale);
        sprite.scale.setY(scale);
    }
}

module.exports = Warp;