var React = require('react');
var ReactDOM = require('react-dom');
var Client = require('./wsClient');
var HomeContent = require('./components/dashboard/HomeContent.jsx');

function renderHome() {
    ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
    ReactDOM.render(React.createElement(HomeContent), document.getElementById('ui'));
};

console.log('Hello VL Dashboard!');
renderHome();

