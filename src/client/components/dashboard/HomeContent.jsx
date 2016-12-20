var React = require('react');
var InfoCard = require('./InfoCard.jsx');

var HomeContent = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            userCount: 0,
            adminCount: 0
        };
    },

    updateUsers: function(userCount) {
        this.setState({
            userCount: userCount
        });
    },

    updateAdmins: function(adminCount) {
        this.setState({
            adminCount: adminCount
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div>
                <div className="row flex-items-xs-center">
                    <div className="col-xs-8">
                        <h1 className="display-1 m-l-1">Home</h1>
                    </div>
                </div>
                <div className="row flex-items-xs-center">
                    <div className="col-xs-2">
                        <InfoCard title="Users" text={this.state.userCount} icon="fa-user" />
                    </div>
                    <div className="col-xs-2">
                        <InfoCard title="Admins" text={this.state.adminCount} icon="fa-user-secret"/>
                    </div>
                    <div className="col-xs-2">
                        <InfoCard />
                    </div>
                    <div className="col-xs-2">
                        <InfoCard />
                    </div>
                </div>
            </div>
            :
            null
        );
    }
});

module.exports = HomeContent;