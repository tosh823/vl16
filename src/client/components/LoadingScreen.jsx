var React = require('react');

var LoadingScreen = React.createClass({

    getInitialState: function () {
        return {
            currentProgress: 0,
            styleValue: {
                width: 0 + '%',
            },
            message: 'Loading scene',
            isVisible: true
        };
    },

    updateProgress: function (value, message = 'Loading scene') {
        this.setState({
            currentProgress: value,
            message: message,
            styleValue: {
                width: value + '%',
            },
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
                    <div className="h4 display-3 text-center">
                        {this.state.message}&hellip;
                        <i className="fa fa-cog fa-spin fa-fw"></i>
                    </div>
                    {this.state.currentProgress > 0 ?
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={this.state.styleValue} aria-valuenow={this.state.currentProgress} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoadingScreen;