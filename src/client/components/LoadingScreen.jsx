var React = require('react');

var LoadingScreen = React.createClass({

    getInitialState: function () {
        return {
            currentProgress: 0,
            message: 'Loading scene',
            isVisible: true
        };
    },

    updateProgress: function (value, message = 'Loading scene') {
        this.setState({
            currentProgress: value,
            message: message
        });
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row align-items-center justify-content-center stretch-y overlay" id="loading">
                <div className="col-6 align-self-center">
                    <div className="h4 text-center">
                        {this.state.message}&hellip;
                        <i className="fa fa-cog fa-spin fa-fw"></i>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" value={this.state.currentProgress} max="100"></div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoadingScreen;