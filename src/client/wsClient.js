var io = require('socket.io-client');
require('webrtc-adapter');

function Client(onConnectCallback, onDisconnectCallback, onErrorCallback) {
    this.onConnectedCallback = onConnectCallback;
    this.onDisconnectedCallback = onDisconnectCallback;
    this.onErrorCallback = onErrorCallback;
    this.room = null;
}

Client.prototype.constructor = Client;

Client.prototype._createRTCPeerConnection = function() {
    var servers = {
        iceServers: [{
            url: "stun:numb.viagenie.ca"
        },
        {
            url: "turn:numb.viagenie.ca",
            credential: 'kriogen1',
            username: 'ayli.veaynim@gmail.com'
        }]
    }
    this.peerConnection = new RTCPeerConnection(servers);
};

Client.prototype._signalOtherPeer = function() {
    
};

Client.prototype.connect = function () {
    var url = 'http://localhost:3333';
    var options = {
        reconnection: true
    };
    this.socket = new io(url, options);
    this.socket.io.on('connect_error', this.onConnectionError.bind(this));
    this.socket.on('connect', this.onConnected.bind(this));
    this.socket.on('disconnect', this.onDisconnected.bind(this));
    this.socket.on('joinRoom', function (roomID) {
        // We joined the room with client
        this.room = roomID;
    }.bind(this));
    this.socket.on('emptyRoom', function (roomID) {
        // We initialized the call and joined empty room
        this.room = roomID;
        this._createRTCPeerConnection();
    }.bind(this));
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

Client.prototype.requestUsers = function() {
    if (this.socket != null) {
        this.socket.emit('requestUsers');
    }
};

Client.prototype.requestAdmins = function() {
    if (this.socket != null) {
        this.socket.emit('requestAdmins');
    }
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

Client.prototype.sendSDP = function (sdp) {
    if (this.socket != null) {
        this.socket.emit('sdp', {
            room: this.room,
            sdp: sdp
        });
    }
};

Client.prototype.sendICECandidate = function (candidate) {
    if (this.socket != null) {
        this.socket.emit('ice candidate', {
            room: this.room,
            candidate: candidate
        });
    }
};

Client.prototype.answerCall = function(room, onCall, onCallEnded) {
    if (this.socket != null) {
        this.socket.emit('createOrJoinRoom', room);
    }
};

Client.prototype.requestCall = function (onCall, onCallEnded) {
    if (this.socket != null) {
        this.socket.emit('createOrJoinRoom', null);
    }
};

Client.prototype.stopCall = function() {

};

module.exports = Client;