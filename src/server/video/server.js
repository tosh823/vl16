var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

var PORT = 3333;
var session = {
    users: {},
    admins: {}
};

function handler (req, res) {
    res.writeHead(200);
    res.end('You are not supposed to be here.');
}

io.on('connection', function (socket) {
  console.log((new Date().toLocaleString()) + ': Socket [' + socket.id + '] connected.');

  socket.on('newUser', function(payload, callback) {
      var time = new Date().toLocaleString();
      session.users[socket.id] = {
          joinTime: time,
          lastUpdated: time,
          location: 'Pääkirjasto'
      };
      Object.keys(session.admins).map(function(adminID) {
          var socketID = socket.id;
          io.to(adminID).emit('userJoined', {
              socketID: session.users[socket.id]
          });
      });
      callback();
  });

  socket.on('updateUser', function(payload, callback) {
      var updateTime = new Date().toLocaleString();
      sessions.users[socket.id].lastUpdated = updateTime;
      sessions.users[socket.id].location = payload.location;
      callback();
  });

  socket.on('newAdmin', function(payload, callback) {
      var time = new Date().toLocaleString();
      session.admins[socket.id] = {
          joinTime: time
      };
      callback();
  });

  socket.on('disconnect', function() {
      if (session.users[socket.id] != null) {
          delete session.users[socket.id];
      }
      else if (session.admins[socket.id] != null) {
          delete session.admins[socket.id];
      }
      console.log((new Date().toLocaleString()) + ': Socket [' + socket.id + '] disconnected.');
  });
});

app.listen(PORT);
console.log('Server running on port ' + PORT + '...');