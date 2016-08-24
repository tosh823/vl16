var React = require('react');

var LoadingScreen = React.createClass({

    getInitialState: function() {
        return { 
            currentProgress: 0,
            message: 'Loading scene',
            isVisible: true 
        };
    },

    updateProgress: function(value, message = 'Loading scene') {
        this.setState({
            currentProgress: value,
            message: message
        });
    },

    hide: function() {
        this.setState({
            isVisible: false
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-middle flex-items-xs-center fullscreen" id="loadingBG">
                <div className="col-xs-6">
                    <div className="text-xs-center" id="example-caption-1">{this.state.message}&hellip;</div>
                    <progress className="progress progress-striped progress-animated" value={this.state.currentProgress} max="100" aria-describedby="example-caption-1"></progress>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoadingScreen;