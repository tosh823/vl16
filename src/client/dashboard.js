var React = require('react');
var ReactDOM = require('react-dom');
var Client = require('./wsClient');
var HomeContent = require('./components/dashboard/HomeContent.jsx');
var ChatContent = require('./components/dashboard/ChatContent.jsx');
var UsersContent = require('./components/dashboard/UsersContent.jsx');

function Dashboard() {
    this.users = {};
    this.admins = {};
    this.rooms = [];
    this.ws = new Client(
        function onConnected() {
            $('#login-indicator').removeClass('orange red').addClass('green');
            this.ws.joinAsAdmin(function () {
                console.log('Joined as admin');
            });
        }.bind(this),
        function onDisconnected() {
            $('#login-indicator').removeClass('orange green').addClass('red');
        },
        function onError(error) {
            $('#login-indicator').removeClass('orange green').addClass('red');
        }
    );
};

Dashboard.prototype.contstructor = Dashboard;
Dashboard.prototype.start = function () {
    console.log('Hello VL Dashboard!');

    this.ws.connect();
    this.ws.socket.on('userJoined', function (data) {
        this.users[data.socketID] = data.userData;
        if (this.home != null && this.home.elementMounted()) this.home.updateUsers(Object.keys(this.users).length);
        if (this.people != null && this.people.elementMounted()) this.people.updateUsers(this.users);
    }.bind(this));

    this.ws.socket.on('adminJoined', function (data) {
        this.admins[data.socketID] = data.adminData;
        if (this.home != null && this.home.elementMounted()) this.home.updateAdmins(Object.keys(this.admins).length);
    }.bind(this));

    this.ws.socket.on('userLeft', function (data) {
        delete this.users[data.socketID];
        if (this.home != null && this.home.elementMounted()) this.home.updateUsers(Object.keys(this.users).length);
        if (this.people != null && this.people.elementMounted()) this.people.updateUsers(this.users);
    }.bind(this));

    this.ws.socket.on('adminLeft', function (data) {
        delete this.admins[data.socketID];
        if (this.home != null && this.home.elementMounted()) this.home.updateAdmins(Object.keys(this.admins).length);
    }.bind(this));

    this.ws.socket.on('userUpdated', function (data) {
        this.users[data.socketID] = data.userData;
        if (this.people != null && this.people.elementMounted()) this.people.updateUsers(this.users);
    }.bind(this));

    this.ws.socket.on('users', function (data) {
        for (var key in data) {
            this.users[key] = data[key];
        }
        if (this.home != null && this.home.elementMounted()) this.home.updateUsers(Object.keys(this.users).length);
    }.bind(this));

    this.ws.socket.on('rooms', function (data) {
        for (var key in data) {
            this.rooms.push({
                roomID: key,
                createdTime: data[key].createdTime,
                creator: data[key].creator
            });
        }
        if (this.chat != null && this.chat.elementMounted()) this.chat.updateRooms(this.rooms);
    }.bind(this));

    this.ws.socket.on('admins', function (data) {
        for (var key in data) {
            this.admins[key] = data[key];
        }
        if (this.home != null && this.home.elementMounted()) this.home.updateAdmins(Object.keys(this.admins).length);
    }.bind(this));

    this.ws.socket.on('roomCreated', function (data) {
        var newRoom = {
            roomID: data.roomID,
            createdTime: data.createdTime,
            creator: data.creator
        };
        this.rooms.push(newRoom);
        if (this.chat != null && this.chat.elementMounted()) this.chat.updateRooms(this.rooms);
    }.bind(this));

    this.ws.socket.on('roomDestroyed', function (data) {
        console.log(this.rooms);
        var index = this.rooms.findIndex(function (element) {
            if (element.roomID == data.roomID) return true;
        });
        this.rooms.splice(index, 1);
        console.log(this.rooms);
        if (this.chat != null && this.chat.elementMounted()) this.chat.updateRooms(this.rooms);
    }.bind(this));

    this.renderHome();
};

Dashboard.prototype.renderHome = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.home = ReactDOM.render(React.createElement(HomeContent), document.getElementById('ui'));
    this.ws.requestUsers();
    this.ws.requestAdmins();
    this.ws.requestRooms();
};

Dashboard.prototype.renderChat = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.chat = ReactDOM.render(React.createElement(ChatContent, {
        rooms: this.rooms,
        onAnswerCall: this.ws.answerCall.bind(this.ws),
        onDeclineCall: this.ws.declineCall.bind(this.ws)
    }), document.getElementById('ui'));
};

Dashboard.prototype.renderUsers = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.people = ReactDOM.render(React.createElement(UsersContent), document.getElementById('ui'));
    this.people.updateUsers(this.users);
};

var instance = new Dashboard();
instance.start();

$('#brand').click(function (e) {
    instance.renderHome();
});

$('#home').click(function (e) {
    instance.renderHome();
});

$('#users').click(function (e) {
    instance.renderUsers();
});

$('#chat').click(function (e) {
    instance.renderChat();
});

$('#settings').click(function (e) {

});





