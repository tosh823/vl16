var config = require('./config');
var App = require('./app');

var app = new App(document.getElementById('world'), config.MainLibrary);
app.loadInitialLocation();