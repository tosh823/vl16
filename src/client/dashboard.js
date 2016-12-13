var React = require('react');
var ReactDOM = require('react-dom');
var Client = require('./wsClient');
var HomeContent = require('./components/dashboard/HomeContent.jsx');

function Dashboard() {
    this.users = {};
    this.admins = {};
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
    this.renderHome();

    this.ws.connect();
    this.ws.socket.on('userJoined', function (data) {
        this.users[data.socketID] = data.userData;
        if (this.home != null) this.home.updateUsers(Object.keys(this.users).length);
    }.bind(this));

    this.ws.socket.on('adminJoined', function (data) {
        this.admins[data.socketID] = data.adminData;
        if (this.home != null) this.home.updateAdmins(Object.keys(this.admins).length);
    }.bind(this));

    this.ws.socket.on('userLeft', function(data) {
        delete this.user[data.socketID];
        if (this.home != null) this.home.updateUsers(Object.keys(this.users).length);
    }.bind(this));

    this.ws.socket.on('adminLeft', function(data) {
        delete this.admins[data.socketID];
        if (this.home != null) this.home.updateAdmins(Object.keys(this.admins).length);
    }.bind(this));

    this.ws.socket.on('userUpdated', function (data) {
        this.users[data.socketID] = data.userData;
    }.bind(this));

    this.ws.socket.on('users', function(data) {
        for (var key in data) {
            this.users[key] = data[key];
        }
        if (this.home != null) this.home.updateUsers(Object.keys(this.users).length);
    }.bind(this));

    this.ws.socket.on('admins', function(data) {
        for (var key in data) {
            this.admins[key] = data[key];
        }
        if (this.home != null) this.home.updateAdmins(Object.keys(this.admins).length);
    }.bind(this));
};

Dashboard.prototype.renderHome = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.home = ReactDOM.render(React.createElement(HomeContent), document.getElementById('ui'));
}

var instance = new Dashboard();
instance.start();



