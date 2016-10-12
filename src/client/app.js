var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var config = require('./config');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');
var TopRightUI = require('./components/TopRightUI.jsx');
var NavBar = require('./components/NavBar.jsx');

function App(canvas) {
  this.vl = new Library(this, canvas);
  this.renderNavBar();
}

App.prototype.constructor = App;
App.prototype.vl = null;

App.prototype.renderNavBar = function() {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-header'));
  this.navBar = ReactDOM.render(React.createElement(NavBar), document.getElementById('page-header'));
};

App.prototype.loadInitialLocation = function (location) {
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
      this.vl.enableBlur();
      ReactDOM.render(
        React.createElement(
          LoginDialog,
          {
            onOnlineCallback: function () {
              this.vl.disableBlur();
              topRightUI = ReactDOM.render(React.createElement(TopRightUI, {
                libraryName: location.name,
                onChangeView: function () {
                  this.vl.switchViewMode();
                }.bind(this),
                onChangeLocation: function (newLocation) {
                  this.loadLocation(newLocation);
                }.bind(this)
              }), document.getElementById('ui'));
            }.bind(this)
          }
        ),
        document.getElementById('ui')
      );
    }.bind(this)
  );
};

App.prototype.loadLocation = function (location, asAvatar = false) {
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
      ReactDOM.render(React.createElement(TopRightUI, {
        libraryName: location.name,
        onChangeView: function () {
          this.vl.switchViewMode();
        }.bind(this),
        onChangeLocation: function (newLocation) {
          this.loadLocation(newLocation);
        }.bind(this)
      }), document.getElementById('ui'));
      if (asAvatar) this.vl.switchViewMode();
    }.bind(this)
  );
}

module.exports = App;





