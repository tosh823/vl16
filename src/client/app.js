var dat = require('dat.GUI');
var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var HelloWorld = require('./reactHW.jsx');

var canvas = document.getElementById('world');
var vl = new Library(canvas);
vl.initFrameRateUI();
vl.loadMainLibrary();

var gui = new dat.GUI();
gui.add(vl, 'changeView');

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('ui')
);
