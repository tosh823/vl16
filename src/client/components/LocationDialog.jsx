var React = require('react');

var LocationDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    hide: function (event) {
        $('#modalDialog').modal('hide');
        this.setState({
            isVisible: false
        });
        this.props.onClose();
    },

    submit: function(event) {
        $('#modalDialog').modal('hide');
        this.setState({
            isVisible: false
        });
        this.props.onSubmit();
    },

    show: function () {
        this.setState({
            isVisible: true
        });
        $('#modalDialog').modal('show');
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="modal fade" id="modalDialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.hide}>
                                <span aria-hidden="true">&times; </span>
                            </button>
                            <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <p>One fine body&hellip; </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.hide}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.submit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div> 
            : null
        );
    }
});

module.exports = LocationDialog;