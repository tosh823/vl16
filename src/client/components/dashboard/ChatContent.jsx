var React = require('react');

var ChatContent = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            isCalling: false,
            pendingCalls: []
        };
    },

    getDefaultProps: function () {
        return {

        };
    },

    addRoom: function (room) {
        var copy = this.state.pendingCalls;
        copy.push(room);
        this.setState({
            pendingCalls: copy
        });
    },

    updateRooms: function (rooms) {
        this.setState({
            pendingCalls: rooms
        });
    },

    answerCall: function (event) {
        var roomID = event.target.dataset.room;
        this.props.onAnswerCall(roomID, 
            function onCall() {

            },
            function onCallEnded() {

            }
        );
    },

    declineCall: function (event) {
        var roomID = event.target.dataset.room;
        this.props.onDeclineCall(roomID);
    },

    renderTableRow: function (call, index) {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{call.user}</td>
                <td>{call.createdTime}</td>
                <td>
                    <button type="button" className="btn btn-success" data-room={call.roomID} onClick={this.answerCall}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" data-room={call.roomID} onClick={this.declineCall}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        );
    },

    render: function () {
        return (this.state.isVisible ?
            <div>
                <div className="row flex-items-xs-center">
                    <div className="col-xs-8">
                        <h1 className="display-1 m-l-1">Chat</h1>
                    </div>
                </div>
                <div className="row flex-items-xs-center">
                    {this.state.isCalling ?
                        <div className="col-xs-6">
                            <video>
                            </video>
                        </div>
                        :
                        <div className="col-xs-8">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User</th>
                                        <th>Requested</th>
                                        <th>Answer</th>
                                        <th>Decline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.pendingCalls.map(this.renderTableRow)}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
            :
            null
        );
    }
});

module.exports = ChatContent;