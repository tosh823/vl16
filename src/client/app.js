var React = require('react');
var ReactDOM = require('react-dom');
var Library = require('./library');
var config = require('./config');
var LoginDialog = require('./components/LoginDialog.jsx');
var LoadingScreen = require('./components/LoadingScreen.jsx');
var TopRightUI = require('./components/TopRightUI.jsx');
var config = require('./config');

// Application
var currentLocation = config.MainLibrary;
var vl = new Library(document.getElementById('world'));
vl.initFrameRateUI();
loadLocation(currentLocation);

function loadLocation(location) {
  // Firstly, unmount all components if some are present
  ReactDOM.unmountComponentAtNode(document.getElementById('ui'));
  var loading = ReactDOM.render(React.createElement(LoadingScreen), document.getElementById('ui'));

  vl.loadLibrary(location.asset,
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
                  vl.changeView();
                },
                onChangeLocation: function () {

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
}






