var Library = require('./library');
var dat = require('dat.GUI');

var canvas = document.getElementById('world');
var vl = new Library(canvas);
vl.initFrameRateUI();
vl.loadMainLibrary();

var gui = new dat.GUI();
gui.add(vl, 'changeView');