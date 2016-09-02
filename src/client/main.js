var config = require('./config');
var App = require('./app');

var app = new App(document.getElementById('world'));
app.loadLocation(config.MainLibrary);