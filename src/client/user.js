
function User(library, entity) {
    THREE.Object3D.call(this);

    // Set position and height
    this.library = library;
    this.entity = entity;
    this.syncDown();
    this.height = this.position.y;

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
}

User.prototype = Object.create(THREE.Object3D.prototype);
User.prototype.constructor = User;

User.prototype.update = function (delta, time) {
    this.animate(time);
    this.syncDown();
};

User.prototype.syncDown = function() {
    if (this.entity != null) {
        var transform = this.entity.component("Placeable");
        var position = transform.attribute('transform').value.pos;
        this.position.set(position.x, position.y, position.z);
    }
};

User.prototype.syncUp = function() {
    if (this.entity != null) {
        /*var transform = this.entity.component("Placeable");
        //transform.attribute('transform').value.setPosition(this.position.clone());
        var value = transform.attribute('transform').value;
        value.setPosition(this.position.clone());
        transform.attribute('transform').set(value);*/
        var userPosition = this.position.clone();
        this.entity.exec(EntityAction.Server, "UserPositionUpdate", [JSON.stringify({ 
            x : userPosition.x, 
            y : userPosition.y, 
            z : userPosition.z 
        })]);
    }
};

User.prototype.animate = function (time) {
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

module.exports = User;
