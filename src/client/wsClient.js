var io = require('socket.io-client');
require('webrtc-adapter');

function Client(onConnectCallback, onDisconnectCallback, onErrorCallback) {
    this.onConnectedCallback = onConnectCallback;
    this.onDisconnectedCallback = onDisconnectCallback;
    this.onErrorCallback = onErrorCallback;
    this.room = null;
    this.isCallInitializer = false;
}

Client.prototype.constructor = Client;

Client.prototype._createRTCPeerConnection = function () {
    var servers = {
        'iceServers': [{
            'url': 'stun:stun.l.google.com:19302'
        }]
    }
    this.peerConnection = new RTCPeerConnection(servers);
    this.peerConnection.addStream(this.stream);
    this.peerConnection.onicecandidate = function (event) {
        if (event.candidate) {
            this.sendICECandidate(event.candidate);
        }
    }.bind(this);
    this.peerConnection.onaddstream = function (data) {
        if (this.onAddStreamCallback != null) this.onAddStreamCallback(data.stream);
    }.bind(this);
    this.peerConnection.onremovestream = function (data) {
        if (this.onRemoveStreamCallback != null) this.onRemoveStreamCallback(data.stream);
    }.bind(this);
    if (this.isCallInitializer) this._createOffer();
};

Client.prototype._createOffer = function () {
    this.peerConnection.createOffer().then(function (offer) {
        console.log('Create SDP offer ' + offer);
        return this.peerConnection.setLocalDescription(offer);
    }.bind(this)).then(function () {
        console.log('Set local description.');
        this.sendSDP(this.peerConnection.localDescription);
    }.bind(this)).catch(function (error) {
        console.log(error);
    });
};

Client.prototype._respondToOffer = function () {
    this.peerConnection.createAnswer().then(function (offer) {
        console.log('Create SDP answer ' + offer);
        return this.peerConnection.setLocalDescription(offer);
    }.bind(this)).then(function () {
        console.log('Set local description.');
        this.sendSDP(this.peerConnection.localDescription);
    }.bind(this)).catch(function (error) {
        console.log(error);
    });
};

Client.prototype._onSDPReceived = function (sdp) {
    this.peerConnection.setRemoteDescription(sdp).then(function () {
        console.log('Set remote description.');
        if (!this.isCallInitializer) this._respondToOffer();
    }.bind(this)).catch(function (error) {
        console.log(error);
    });
};

Client.prototype.connect = function () {
    var url = 'https://infinite-dusk-99399.herokuapp.com';
    var options = {
        reconnection: true
    };
    this.socket = new io(url, options);
    this.socket.io.on('connect_error', this.onConnectionError.bind(this));
    this.socket.on('connect', this.onConnected.bind(this));
    this.socket.on('disconnect', this.onDisconnected.bind(this));
    // Rooms
    this.socket.on('joinRoom', function (roomID) {
        // We joined the room with client
        console.log('Someone joined my room [' + roomID + '].');
        this.room = roomID;
        this._createRTCPeerConnection();
    }.bind(this));
    this.socket.on('emptyRoom', function (roomID) {
        // We initialized the call and joined empty room
        console.log('Me joined my room [' + roomID + '].');
        this.room = roomID;
        this.isCallInitializer = true;
    }.bind(this));
    this.socket.on('leftRoom', function() {
        // Reset all
        this.room = null;
        this.isCallInitializer = false;
        if (this.peerConnection != null) this.peerConnection.close();
        if (this.onCallEndCallback != null) this.onCallEndCallback();
    }.bind(this));
    // RTC
    this.socket.on('sdpReceived', function (sdp) {
        this._onSDPReceived(new RTCSessionDescription(sdp));
    }.bind(this));
    this.socket.on('iceCandidateReceived', function (candidate) {
        console.log('Received ICE.');
        this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
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

Client.prototype.requestUsers = function () {
    if (this.socket != null) {
        this.socket.emit('requestUsers');
    }
};

Client.prototype.requestAdmins = function () {
    if (this.socket != null) {
        this.socket.emit('requestAdmins');
    }
};

Client.prototype.requestRooms = function () {
    if (this.socket != null) {
        this.socket.emit('requestRooms');
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
        this.socket.emit('iceCandidate', {
            room: this.room,
            candidate: candidate
        });
    }
};

Client.prototype.answerCall = function (room, stream, onAddStream, onRemoveStream, onCallEnd) {
    if (this.socket != null) {
        this.socket.emit('createOrJoinRoom', room);
        this.stream = stream;
        this.onAddStreamCallback = onAddStream;
        this.onRemoveStreamCallback = onRemoveStream;
        this.onCallEndCallback = onCallEnd;
    }
};

Client.prototype.requestCall = function (stream, onAddStream, onRemoveStream, onCallEnd) {
    if (this.socket != null) {
        this.socket.emit('createOrJoinRoom', null);
        this.stream = stream;
        this.onAddStreamCallback = onAddStream;
        this.onRemoveStreamCallback = onRemoveStream;
        this.onCallEndCallback = onCallEnd;
    }
};

Client.prototype.declineCall = function (room) {
    if (this.socket != null) {
        // Destroy room
        this.socket.emit('destroyRoom', room);
    }
};

Client.prototype.stopCall = function () {
    if (this.socket != null && this.room != null) {
        // Leave room
        this.socket.emit('leaveRoom', this.room);
        this.room = null;
        this.isCallInitializer = false;
        if (this.peerConnection != null) this.peerConnection.close(); 
    }
};

module.exports = Client;