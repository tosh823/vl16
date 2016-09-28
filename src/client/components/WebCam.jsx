var React = require('react');

var WebCam = React.createClass({

    getInitialState: function () {
        return {
            isVisible: false
        };
    },

    componentDidMount: function () {

    },

    render: function () {
        return (
            <div>
                <video id="camReceiver">Video is not available</video>     
            </div>
        );
    }
});

module.exports = WebCam;