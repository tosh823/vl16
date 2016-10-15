var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var config = require('./config');
var LibraryAPI = require('./libraryAPI');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');
var TopRightUI = require('./components/TopRightUI.jsx');
var NavBar = require('./components/NavBar.jsx');
var ControlPanel = require('./components/ControlPanel.jsx');

function App(canvas, defaultLocation) {
  this.vl = new Library(this, canvas);
  this.currentLocation = defaultLocation;
  this.renderNavBar();
}

App.prototype.constructor = App;
App.prototype.vl = null;

App.prototype.renderNavBar = function() {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-header'));
  this.navBar = ReactDOM.render(React.createElement(NavBar, {
    location: this.currentLocation,
    onWarpTo: function(location) {
      this.loadLocation(location);
    }.bind(this),
    onAction: function() {
      this.renderControlPanel();
    }.bind(this),
    onAbout: function() {

    },
    onSearch: function(query) {
      var api = new LibraryAPI();
      api.search(query, null);
    }.bind(this)
  }), document.getElementById('page-header'));
};

App.prototype.renderControlPanel = function() {
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  this.controlPanel = ReactDOM.render(React.createElement(ControlPanel, {
    onSwitchView: function() {
      this.vl.switchViewMode();
    }.bind(this)
  }), document.getElementById('ui')); 
};

App.prototype.loadInitialLocation = function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  var loading = ReactDOM.render(React.createElement(LoadingScreen), document.getElementById('ui'));
  this.vl.loadLibrary(this.currentLocation,
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
      this.vl.enableBlur();
      ReactDOM.render(
        React.createElement(
          LoginDialog,
          {
            onOnlineCallback: function () {
              this.vl.disableBlur();
            }.bind(this)
          }
        ),
        document.getElementById('ui')
      );
    }.bind(this)
  );
};

App.prototype.loadLocation = function (location, asAvatar = false) {

  this.currentLocation = location;
  if (asAvatar) {
    // Hide NavBar
    this.navBar.hide();
  }
  else {
    this.navBar.setCurrentLocation(this.currentLocation);
  }

  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  var loading = ReactDOM.render(React.createElement(LoadingScreen), document.getElementById('ui'));
  this.vl.loadLibrary(location,
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
      if (asAvatar) this.vl.switchViewMode();
    }.bind(this)
  );
}

module.exports = App;





