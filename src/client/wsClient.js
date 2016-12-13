var io = require('socket.io-client');

function Client(onConnectCallback, onDisconnectCallback, onErrorCallback) {
    this.onConnectedCallback = onConnectCallback;
    this.onDisconnectedCallback = onDisconnectCallback;
    this.onErrorCallback = onErrorCallback;
    this.servers = {
        iceServers: [{
            url: "stun:numb.viagenie.ca"
        },
        {
            url: "turn:numb.viagenie.ca",
            credential: 'kriogen1',
            username: 'ayli.veaynim@gmail.com'
        }]
    }
}

Client.prototype.constructor = Client;

Client.prototype.connect = function () {
    var url = 'http://localhost:3333';
    var options = {
        reconnection: true
    };
    this.socket = new io(url, options);
    this.socket.io.on('connect_error', this.onConnectionError.bind(this));
    this.socket.on('connect', this.onConnected.bind(this));
    this.socket.on('disconnect', this.onDisconnected.bind(this));
};

Client.prototype.onConnected = function () {
    var receiveTime = new Date().toLocaleString();
    console.log(receiveTime + ': Connected to server.');
    if (this.onConnectedCallback != null) this.onConnectedCallback();
};

Client.prototype.onDisconnected = function () {
    var receiveTime = new Date().toLocaleString();
    console.log(receiveTime + ': Disconnected from server.');
    if (this.onDisconnectedCallback != null) this.onDisconnectedCallback();
};

Client.prototype.onConnectionError = function (error) {
    var receiveTime = new Date().toLocaleString();
    console.log(receiveTime + ': Connection failure.');
    console.log(error);
    if (this.onErrorCallback != null) this.onErrorCallback(error);
};

Client.prototype.joinAsUser = function (callback) {
    if (this.socket != null) {
        this.socket.emit('newUser', {
            msg: 'Hello!'
        }, callback);
    }
};

Client.prototype.joinAsAdmin = function (callback) {
    if (this.socket != null) {
        this.socket.emit('newAdmin', {
            msg: 'Hello!'
        }, callback);
    }
};

module.exports = Client;