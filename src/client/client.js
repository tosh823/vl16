
function Client(onConnected, onDisconnected, onError) {
    this.online = false;
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
    this.onConnectedCallback = onConnected;
    this.onDisconnectedCallback = onDisconnected;
    this.onConnectionErrorCallback = onError;
    this.client.onConnected(this, this.onConnected);
    this.client.onDisconnected(this, this.onDisconnected);
    this.client.onConnectionError(this, this.onConnectionError);
};

Client.prototype.constructor = Client;

Client.prototype.connect = function() {
    this.client.connect('localhost:8080', {});
};

Client.prototype.onConnected = function () {
    console.log('Connected to Tundra server');
    this.online = true;
    if (this.onConnectedCallback != null) this.onConnectedCallback(this.client.connectionId);
};

Client.prototype.onConnectionError = function(event) {
    console.log('Cannot connect to Tundra server');
    this.online = false;
    if (this.onConnectionErrorCallback != null) this.onConnectionErrorCallback(event);
};

Client.prototype.onDisconnected = function () {
    console.log('Disconnected from Tundra server');
    this.online = false;
    if (this.onDisconnectedCallback != null) this.onDisconnectedCallback();
};

module.exports = Client;

