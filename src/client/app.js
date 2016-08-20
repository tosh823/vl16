var dat = require('dat.GUI');
var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var LoginDialog = require('./components/LoginDialog.jsx');

var canvas = document.getElementById('world');
var vl = new Library(canvas);
vl.initFrameRateUI();
vl.loadMainLibrary();

var gui = new dat.GUI();
gui.add(vl, 'changeView');

var displayLogin = true;

ReactDOM.render(
    React.createElement(
      LoginDialog, 
      {
        onSubmit: function(name) {
          displayLogin = false;
          console.log(name);
        }
      }
    ), 
    document.getElementById('ui')
);


