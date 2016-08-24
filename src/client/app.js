//var dat = require('dat.GUI');
var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');
var TopRightUI = require('./components/TopRightUI.jsx');

var canvas = document.getElementById('world');

var loading = ReactDOM.render(React.createElement(LoadingScreen), document.getElementById('ui'));
var topRightUI = null;

var vl = new Library(canvas);
vl.initFrameRateUI();
vl.loadMainLibrary(
  function onProgress(loaded, total) {
    var ratio = Math.round(loaded / total * 100);
    if (ratio >= 100) {
      loading.updateProgress(ratio, 'Setting things up');
    }
    else {
      loading.updateProgress(ratio);
    }
  },
  function onLoad() {
    loading.hide();
    vl.enableBlur();
    ReactDOM.render(
      React.createElement(
        LoginDialog,
        {
          onOnlineCallback: function () {
            vl.disableBlur();
            topRightUI = ReactDOM.render(React.createElement(TopRightUI), document.getElementById('ui'));
          },
          onOfflineCallback: function() {
            vl.disableBlur();
          }
        }
      ),
      document.getElementById('ui')
    );
  }
);

/*var gui = new dat.GUI();
gui.add(vl, 'changeView');*/






