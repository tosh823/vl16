
function Client() {
    this.client = new TundraClient({
        Tundra: {
            polymer: (typeof Polymer === "function"),
            deprecatedWarnings: false
        },
        TundraClient: {
            renderer: ThreeJsRenderer, 
            container: "#underworld",
            loglevel: "error"
        },
        AssetAPI: {
            storages: {
                "webtundra://": window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")),
                "webtundra-assets://": "./assets"
            }
        }
    });
    this.client.onConnected(null, this.onConnected.bind(this));
    this.client.onDisconnected(null, this.onDisconnected.bind(this));
    this.client.onConnectionError(null, this.onConnectionError.bind(this));
};

Client.prototype.constructor = Client;

Client.prototype.connect = function() {
    this.client.connect('localhost:8080', {});
};

Client.prototype.onConnected = function () {
    console.log('Client connected');
};

Client.prototype.onConnectionError = function(event) {
    console.log('Connection error');
};

Client.prototype.onDisconnected = function () {
    console.log('Client disconnected');
};

Client.prototype.onUpdate = function (frame) {

};

module.exports = Client;

