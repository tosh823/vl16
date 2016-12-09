var React = require('react');
var ReactDOM = require('react-dom');
var Client = require('./wsClient');
var HomeContent = require('./components/dashboard/HomeContent.jsx');

function renderHome() {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    ReactDOM.render(React.createElement(HomeContent), document.getElementById('ui'));
};

console.log('Hello VL Dashboard!');
var ws = new Client(
    function onConnected() {
        var receiveTime = new Date().toLocaleString();
        console.log(receiveTime + ': Connected to server.');
        $('#login-indicator').removeClass('orange red').addClass('green');
        ws.joinAsAdmin(function() {
            console.log('Joined as admin');
        });
    },
    function onDisconnected() {
        var receiveTime = new Date().toLocaleString();
        console.log(receiveTime + ': Disconnected from server.');
        $('#login-indicator').removeClass('orange green').addClass('red');
    },
    function onError(error) {
        var receiveTime = new Date().toLocaleString();
        console.log(receiveTime + ': Connection failure.');
        console.log(error);
        $('#login-indicator').removeClass('orange green').addClass('red');
    }
);

ws.connect();
renderHome();

