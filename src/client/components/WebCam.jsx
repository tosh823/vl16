var React = require('react');

var WebCam = React.createClass({

    getInitialState: function () {
        return {
            isVisible: false
        };
    },

    render: function () {
        return (
            <div>
                <video id="camReceiver"></video>     
            </div>
        );
    }
});

module.exports = WebCam;