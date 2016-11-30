var React = require('react');
var Client = require('../client');

var LoginDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            desciptionText: "This is a prototype version of a project for Oulu City Library",
            statusText: ""
        };
    },

    close: function () {
        this.setState({
            isVisible: false
        });
    },

    onButtonClick: function (event) {
        var client = new Client(
            function onConnect(connectionId) {
                this.props.onConnect(connectionId);
                this.setState({
                    statusText: "Successfully connected to server!"
                });
                setTimeout(this.close, 500);
            }.bind(this),
            function onDisonnect() {
                this.props.onDisconnect();
            }.bind(this),
            function onError(error) {
                this.props.onError(error);
                this.setState({
                    statusText: "Connection failure, continue in offline mode."
                });
                setTimeout(this.close, 500);
            }.bind(this)
        );
        client.connect();
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-center stretch-y">
                <div className="col-xs-3 flex-xs-middle">
                    <div className="card text-xs-center">
                        <div className="card-header">Oulu City Library</div>
                        <div className="card-block">
                            <h5 className="card-title">Welcome to Virtual Library!</h5>
                            <p className="card-text">{this.state.desciptionText}</p>
                            <button type="button" className="btn btn-primary" id="online_login" onClick={this.onButtonClick}>Connect</button>
                            <p className="card-text">{this.state.statusText}</p>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoginDialog;
