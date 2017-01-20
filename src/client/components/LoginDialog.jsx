var React = require('react');
var Client = require('../tundraClient');

var LoginDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            desciptionText: "This is a prototype version of a project for Oulu City Library",
            showStatus: false,
            connecting: false,
            button: "btn btn-primary",
            buttonText: "Connect",
            alert: "alert alert-info m-t-1",
            statusTitle: "Hey!",
            statusText: "You shouldn't see that message."
        };
    },

    close: function () {
        this.setState({
            isVisible: false
        });
    },

    connectToTundra: function() {
        var client = new Client(
            function onConnect() {
                this.props.onConnect();
                this.setState({
                    connecting: false,
                    showStatus: true,
                    alert: "alert alert-success m-t-1",
                    button: "btn btn-success",
                    buttonText: "Connected",
                    statusTitle: "Success!",
                    statusText: "Connected to server, proceeding in online mode."
                });
                setTimeout(this.close, 2000);
            }.bind(this),
            function onDisonnect() {
                this.props.onDisconnect();
            }.bind(this),
            function onError(error) {
                this.props.onError(error);
                this.setState({
                    connecting: false,
                    showStatus: true,
                    alert: "alert alert-danger m-t-1",
                    button: "btn btn-warning",
                    buttonText: "Failed",
                    statusTitle: "Error.",
                    statusText: "Cannot connect to a server, proceeding in offline mode."
                });
                setTimeout(this.close, 2000);
            }.bind(this)
        );
        this.setState({
            connecting: true,
            buttonText: "Connecting"
        });
        client.connect();
    },

    proceedInOffline: function() {
        this.props.onError(null);
        this.close();
    },

    onButtonClick: function (event) {
        event.preventDefault();
        if (this.state.connecting) return;
        if (this.props.tundra == true) this.connectToTundra();
        else this.proceedInOffline();
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row align-items-center justify-content-center stretch-y">
                <div className="col-6 align-self-center">
                    <div className="card text-center">
                        <div className="card-header">Oulu City Library</div>
                        <div className="card-block">
                            <h5 className="card-title">Welcome to Virtual Library!</h5>
                            <p className="card-text">{this.state.desciptionText}</p>
                            <a className={this.state.button} href="#" type="button" onClick={this.onButtonClick}>
                                {this.state.buttonText}
                                {this.state.connecting ?
                                    <i className="fa fa-circle-o-notch fa-spin fa-fw m-l-1"></i>
                                    :
                                    null
                                }
                            </a>
                            {this.state.showStatus ?
                                <div className={this.state.alert} role="alert">
                                    <strong>{this.state.statusTitle}</strong> {this.state.statusText}
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoginDialog;
