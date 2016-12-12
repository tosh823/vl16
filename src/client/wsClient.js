var io = require('socket.io-client');

function Client(onConnectCallback, onDisconnectCallback, onErrorCallback) {
    this.onConnectedCallback = onConnectCallback;
    this.onDisconnectedCallback = onDisconnectCallback;
    this.onErrorCallback = onErrorCallback;
}

Client.prototype.constructor = Client;

Client.prototype.connect = function () {
    var url = 'http://localhost:3333';
    var options = {
        reconnection: true
    };
    this.socket = new io(url, options);
    this.socket.io.on('connect_error', this.onErrorCallback);
    this.socket.on('connect', this.onConnectedCallback);
    this.socket.on('disconnect', this.onDisconnectedCallback);
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