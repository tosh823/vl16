var dat = require('dat.GUI');
var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');

var canvas = document.getElementById('world');

var loading = ReactDOM.render(React.createElement(LoadingScreen), document.getElementById('ui'));

var vl = new Library(canvas);
vl.initFrameRateUI();
vl.loadMainLibrary(
  function onProgress(loaded, total) {
    var ratio = Math.round(loaded / total * 100);
    loading.updateProgress(ratio);
  },
  function onLoad() {
    loading.hide();
    ReactDOM.render(
      React.createElement(
        LoginDialog,
        {
          onSubmit: function (name) {
            console.log(name);
          }
        }
      ),
      document.getElementById('ui')
    );
  }
);
var gui = new dat.GUI();
gui.add(vl, 'changeView');






