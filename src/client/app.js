var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var WebSocket = require('./wsClient');
var config = require('./config');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');
var TopRightUI = require('./components/TopRightUI.jsx');
var NavBar = require('./components/NavBar.jsx');
var ControlPanel = require('./components/ControlPanel.jsx');
var SearchPanel = require('./components/SearchPanel.jsx');
var CallDialog = require('./components/CallDialog.jsx');

function App(canvas, defaultLocation) {
  this.vl = new Library(this, canvas);
  this.currentLocation = defaultLocation;
  this.renderNavBar();
  this.initWS();
}

App.prototype.constructor = App;
App.prototype.vl = null;

App.prototype.initWS = function () {
  this.ws = new WebSocket(
    function onConnected() {
      this.navBar.setOnlineIndicator();
      this.ws.joinAsUser(function () {
        console.log('Joined as user');
      });
    }.bind(this),
    function onDisconnected() {
      this.navBar.setOfflineIndicator();
    }.bind(this),
    function onError(error) {
      this.navBar.setOfflineIndicator();
    }.bind(this)
  );
  this.ws.connect();
};

App.prototype.renderNavBar = function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-header'));
  this.navBar = ReactDOM.render(React.createElement(NavBar, {
    location: this.currentLocation,
    onWarpTo: function (location) {
      this.loadLocation(location);
    }.bind(this),
    onNavigation: function () {
      this.renderControlPanel();
    }.bind(this),
    onChangeCamera: function () {
      this.vl.switchViewMode();
    }.bind(this),
    onAbout: function () {

    }.bind(this),
    onCall: function () {
      this.renderCallPanel();
    }.bind(this),
    onSearch: function (query) {
      this.renderSearchPanel(query);
    }.bind(this)
  }), document.getElementById('page-header'));
};

App.prototype.renderControlPanel = function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  this.controlPanel = ReactDOM.render(React.createElement(ControlPanel, {
    location: this.currentLocation,
    onNavigateTo: function (destination) {
      console.log('Show me path to ' + destination);
      this.vl.findPath(destination);
    }.bind(this)
  }), document.getElementById('ui'));
};

App.prototype.renderSearchPanel = function (query) {
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  this.searchPanel = ReactDOM.render(React.createElement(SearchPanel, {
    search: query,
    onCheckPath: function (book) {
      return this.vl.findBookShelf(book);
    }.bind(this),
    onShowPath: function (shelf) {
      this.vl.findPath(shelf);
    }.bind(this)
  }), document.getElementById('ui'));
};

App.prototype.renderLoginPanel = function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  ReactDOM.render(React.createElement(LoginDialog, {
    tundra: false,
    onConnect: this.vl.onConnectedToServer.bind(this.vl),
    onError: this.vl.onConnectionError.bind(this.vl),
    onDisconnect: this.vl.onDisconnectedFromServer.bind(this.vl)
  }), document.getElementById('ui'));
};

App.prototype.renderCallPanel = function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  ReactDOM.render(React.createElement(CallDialog, {
    startCall: this.ws.requestCall.bind(this.ws),
    stopCall: this.ws.stopCall.bind(this.ws)
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
      this.renderLoginPanel();
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





