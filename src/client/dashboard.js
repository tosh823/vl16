var React = require('react');
var ReactDOM = require('react-dom');
var Client = require('./wsClient');
var HomeContent = require('./components/dashboard/HomeContent.jsx');

function Dashboard() {
    this.users = {};
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
        this.users[Object.keys(data)[0]] = data.socketID;
        console.log(this.users);
    }.bind(this));
};

Dashboard.prototype.renderHome = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    this.home = ReactDOM.render(React.createElement(HomeContent), document.getElementById('ui'));
}

var instance = new Dashboard();
instance.start();



