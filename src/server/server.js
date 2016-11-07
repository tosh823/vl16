var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var sockets = {};

// Socket.IO implementation
io.on('connection', function (socket) {
    console.log('Socket connected');
    
    io.to(socket.id).emit('fetch', {
        clients: sockets
    });

    sockets[socket.id] = null;

    socket.on('disconnect', function () {
        console.log('Socket disconnected');
        io.emit('leave', {
            socketID: socket.id
        });
        delete sockets[socket.id];
    });

    socket.on('update', function(data) {
        if (data != null) {
            sockets[socket.id] = data;
            socket.broadcast.emit('notify', {
                socketID: socket.id,
                position: data
            });
        }
    });
});

// Launch server
server.listen(8080, function () {
    console.log('VL listening on port 3000!');
});