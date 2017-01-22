var React = require('react');

var UsersContent = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            users: []
        };
    },

    _isMounted: false,

    componentDidMount: function () {
        this._isMounted = true;
    },

    componentWillUnmount: function () {
        this._isMounted = false;
    },

    elementMounted: function () {
        return this._isMounted;
    },

    updateUsers: function (users) {
        var output = [];
        for (var id in users) {
            output.push({
                id: id,
                loggedTime: users[id].joinTime,
                location: users[id].location,
                lastUpdated: users[id].lastUpdated
            });
        };
        this.setState({
            users: output
        });
    },

    renderTableRow: function (user, index) {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.loggedTime}</td>
                <td>{user.lastUpdated}</td>
                <td>{user.location}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm" data-user={user.id}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        );
    },

    render: function () {
        return (this.state.isVisible ?
            <div>
                <div className="row justify-content-center">
                    <div className="col-8 align-self-center">
                        <h1 className="display-1 ml-1">Users</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Logged in</th>
                                    <th>Last updated</th>
                                    <th>Location</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(this.renderTableRow)}
                            </tbody>
                        </table>
                        {this.state.users.length == 0 ?
                            <p className="text-center">There are no users at the moment.</p>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            :
            null
        );
    }

});

module.exports = UsersContent;