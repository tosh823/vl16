var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var Hashids = require('hashids');

var hashids = new Hashids();
var PORT = 3333;
var session = {
    users: {},
    admins: {}
};

function handler(req, res) {
    res.writeHead(200);
    res.end('You are not supposed to be here.');
}

io.on('connection', function (socket) {
    console.log((new Date().toLocaleString()) + ': Socket [' + socket.id + '] connected.');

    socket.on('newUser', function (payload, callback) {
        var time = new Date().toLocaleString();
        session.users[socket.id] = {
            joinTime: time,
            lastUpdated: time,
            location: 'Pääkirjasto'
        };
        Object.keys(session.admins).map(function (adminID) {
            var socketID = socket.id;
            io.to(adminID).emit('userJoined', {
                socketID: socket.id,
                userData: session.users[socket.id]
            });
        });
        callback();
    });

    socket.on('updateUser', function (payload, callback) {
        var updateTime = new Date().toLocaleString();
        sessions.users[socket.id].lastUpdated = updateTime;
        sessions.users[socket.id].location = payload.location;
        Object.keys(session.admins).map(function (adminID) {
            var socketID = socket.id;
            io.to(adminID).emit('userUpdated', {
                socketID: socket.id,
                userData: session.users[socket.id]
            });
        });
        callback();
    });

    socket.on('newAdmin', function (payload, callback) {
        var time = new Date().toLocaleString();
        session.admins[socket.id] = {
            joinTime: time
        };
        // Send list of current users and admins to new admin client
        io.to(socket.id).emit('users', session.users);
        io.to(socket.id).emit('admins', session.admins);
        // Notify other admins about new adming client
        Object.keys(session.admins).map(function (adminID) {
            var socketID = socket.id;
            io.to(adminID).emit('adminJoined', {
                socketID: socket.id,
                adminData: session.admins[socket.id]
            });
        });
        callback();
    });

    socket.on('sdp', function (data) {
        socket.to(data.room).emit('sdpReceived', data.sdp);
    });

    socket.on('iceCandidate', function (data) {
        socket.to(data.room).emit('iceCandidateReceived', data.candidate);
    });

    socket.on('createOrJoinRoom', function (room) {
        // join room
        var existingRoom = io.sockets.adapter.rooms[room];
        var clients = [];
        var roomID;

        if (existingRoom) {
            // Fetch data about a room
            clients = Object.keys(existingRoom);
            roomID = room;
        }
        else {
            // Create a new room
            roomID = hashids.encode(new Date().getTime());
        }

        if (clients.length == 0) {
            socket.join(roomID);
            io.to(roomID).emit('emptyRoom', roomID);
        }
        else if (clients.length == 1) {
            socket.join(roomID);
            socket.to(roomID).emit('joinRoom', roomID, clients.length + 1);
        }
        // only allow 2 users max per room
        else {
            socket.emit('fullRoom', roomID);
        }
    });

    socket.on('disconnect', function () {
        if (session.users[socket.id] != null) {
            delete session.users[socket.id];
            Object.keys(session.admins).map(function (adminID) {
                var socketID = socket.id;
                io.to(adminID).emit('userLeft', {
                    socketID: socket.id
                });
            });
        }
        else if (session.admins[socket.id] != null) {
            delete session.admins[socket.id];
        }
        console.log((new Date().toLocaleString()) + ': Socket [' + socket.id + '] disconnected.');
    });
});

app.listen(PORT);
console.log('Server running on port ' + PORT + '...');