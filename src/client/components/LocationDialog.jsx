var React = require('react');

var LocationDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    hide: function () {
        $('#modalDialog').modal('hide');
        this.setState({
            isVisible: false
        });
    },

    show: function () {
        $('#modalDialog').modal('show');
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="modal fade" id="modalDialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times; </span>
                            </button>
                            <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <p>One fine body&hellip; </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> 
            : null
        );
    }
});

module.exports = LocationDialog;