var React = require('react');

var LoginDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            desciptionText: "This is a prototype version of a project for Oulu City Library"
        };
    },

    onOnlineClick: function (event) {
        event.preventDefault();
        this.setState({
            isVisible: false
        });
        this.props.onOnlineCallback();
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-middle flex-items-xs-center stretch">
                <div className="col-xs-3">
                    <div className="card text-xs-center">
                        <div className="card-header">Oulu City Library</div>
                        <div className="card-block">
                            <h5 className="card-title">Welcome to Virtual Library!</h5>
                            <p className="card-text">{this.state.desciptionText}</p>
                            <button type="button" className="btn btn-primary" id="online_login" onClick={this.onOnlineClick}>Connect</button>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoginDialog;
