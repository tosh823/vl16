var React = require('react');

var StuffDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: false,
            desciptionText: "Here is some test description"
        };
    },

    componentDidMount: function () {

    },

    show: function () {
        this.setState({
            isVisible: true
        });
        $('#modalDialog').modal('show');
    },

    submit: function(event) {
        this.props.onMakeCall();
    },

    hide: function(withCallback = true) {
        $('#modalDialog').modal('hide');
        this.setState({
            isVisible: false
        });
        if (withCallback) this.props.onClose();
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
                            <h4 className="modal-title">Service Point</h4>
                        </div>
                        <div className="modal-body">
                            <p>{this.state.desciptionText}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.hide}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.submit}>Call</button>
                        </div>
                    </div>
                </div>
            </div> 
            : null
        );
    }
});

module.exports = StuffDialog;