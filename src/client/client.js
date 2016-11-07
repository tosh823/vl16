var io = require('socket.io-client');

function Client(library) {
    this.library = library;
};

Client.prototype.constructor = Client;

Client.prototype.connect = function() {
    this.socket = new io('http://localhost:8080', {
        reconnection: false
    });

    this.socket.io.on('connect_error', function (error) {
        var receiveTime = new Date().toLocaleString();
        console.log(receiveTime + ' : Connection Failed');
    });

    this.socket.on('connect', function () {
        var receiveTime = new Date().toLocaleString();
        console.log(receiveTime + ' : Successfully connected to backend');
    });

    this.socket.on('fetch', function(data) {
        this.library.loadClients(data.clients);
        this.library.addAvatar();
    }.bind(this));

    this.socket.on('leave', function(data) {
        this.library.removeUser(data.socketID);
    }.bind(this));

    this.socket.on('notify', function(data) {
        this.library.addOrUpdateInfo(data);
    }.bind(this));
};

Client.prototype.update = function(position) {
    this.socket.emit('update', position);
};

module.exports = Client;

