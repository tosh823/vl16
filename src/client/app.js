var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var config = require('./config');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');
var TopRightUI = require('./components/TopRightUI.jsx');

function App(canvas) {
  this.vl = new Library(canvas);
}

App.prototype.constructor = App;
App.prototype.vl = null;
App.prototype.loadLocation = function(location) {
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
                  this.loadLocation(newLocation)
                }.bind(this)
              }), document.getElementById('ui'));
            }.bind(this),
            onOfflineCallback: function () {
              this.vl.disableBlur();
            }.bind(this)
          }
        ),
        document.getElementById('ui')
      );
    }.bind(this)
  );
};


/*function loadLocation(location) {
  // Firstly, unmount all components if some are present
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  var loading = ReactDOM.render(React.createElement(LoadingScreen), document.getElementById('ui'));

  vl.loadLibrary(location,
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
              topRightUI = ReactDOM.render(React.createElement(TopRightUI, {
                libraryName: location.name,
                onChangeView: function () {
                  vl.switchViewMode();
                },
                onChangeLocation: function (newLocation) {
                  loadLocation(newLocation)
                }
              }), document.getElementById('ui'));
            },
            onOfflineCallback: function () {
              vl.disableBlur();
            }
          }
        ),
        document.getElementById('ui')
      );
    }
  );
}*/

// Application
var app = new App(document.getElementById('world'));
//var vl = new Library(document.getElementById('world'));
//loadLocation(config.MainLibrary);
app.loadLocation(config.MainLibrary);

module.exports = App;





