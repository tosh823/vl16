var React = require('react');

var LoadingScreen = React.createClass({

    getInitialState: function() {
        return { 
            currentProgress: 0,
            isVisible: true 
        };
    },

    updateProgress: function(value) {
        this.setState({
            currentProgress: value
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
                    <div className="text-xs-center" id="example-caption-1">Loading scene&hellip; {this.state.currentProgress}%</div>
                    <progress className="progress progress-striped" value={this.state.currentProgress} max="100" aria-describedby="example-caption-1"></progress>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoadingScreen;