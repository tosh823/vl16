var io = require('socket.io-client');

function Client(onConnectCallback, onDisconnectCallback, onErrorCallback) {
    this.onConnected = onConnectCallback;
    this.onDisconnected = onDisconnectCallback;
    this.onError = onErrorCallback;
}

Client.prototype.constructor = Client;

Client.prototype.connect = function() {
    var url = 'localhost:8080';
    var options = {
        reconnection: false
    };
    this.socket = io(url, options);
    this.socket.on('connect', this.onConnected);
    this.scoket.on('error', this.onError);
    this.socket.on('disconnect', this.onDisconnected);
};

Client.prototype.joinAsUser = function() {
    if (this.socket != null) {
        this.socket.emit('newUser', {

        });
    }
};

Client.prototype.joinAsAdmin = function() {
    if (this.socket != null) {
        this.socket.emit('newAdmin', {
            
        });
    }
};

module.exports = Client;