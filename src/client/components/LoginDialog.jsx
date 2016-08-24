var React = require('react');

var LoginDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            desciptionText: "Hover the button to display the description of the mode."
        };
    },

    onOnlineClick: function (event) {
        event.preventDefault();
        this.setState({
            isVisible: false
        });
        this.props.onOnlineCallback();
    },

    onOfflineClick: function (event) {
        event.preventDefault();
        this.setState({
            isVisible: false
        });
        this.props.onOfflineCallback();
    },

    onMouseOver: function (event) {
        if (event.target.id == "online_login") {
            this.setState({
                desciptionText: "This is a full mode. You will see other users of Virtual Library."
            });
        }
        else if (event.target.id == "offline_login") {
            this.setState({
                desciptionText: "The Virtual Library would be instanced only for you. You can still use all functions."
            });
        }
    },

    onMouseOut: function (event) {
        this.setState({
            desciptionText: "Hover the button to display the description of the mode."
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-middle flex-items-xs-center stretch">
                <div className="col-xs-3">
                    <div className="card text-xs-center">
                        <div className="card-header">Welcome to Virtual Library!</div>
                        <div className="card-block">
                            <h5 className="card-title">Choose the method of entering</h5>
                            <p className="card-text">{this.state.desciptionText}</p>
                        </div>
                        <div className="card-block">
                            <div className="row">
                                <div className="col-xs">
                                    <button type="button" className="btn btn-primary" id="online_login" onClick={this.onOnlineClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>Online</button>
                                </div>
                                <div className="col-xs">
                                    <button type="button" className="btn btn-primary" id="offline_login" onClick={this.onOfflineClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>Offline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoginDialog;
