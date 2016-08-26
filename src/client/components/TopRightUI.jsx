var React = require('react');

var TopRightUI = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div>
                <div className="row flex-items-xs-right stretch">
                    <div className="col-xs-3 m-t-1">
                        <div className="card">
                            <div className="card-header">{this.props.libraryName}</div>
                            <div className="card-block">
                                <h5 className="card-title">User Interface</h5>
                                <p className="card-text">In development.</p>
                                <button type="button" className="btn btn-primary" id="online_login" onClick={this.props.onChangeView}>Change View</button>
                            </div>
                            <div className="card-block">
                                <button type="button" className="btn btn-primary" id="online_login" onClick={this.props.onChangeLocation} data-toggle="modal" data-target="#locationSelect">Change Location</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="locationSelect" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times; </span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = TopRightUI;