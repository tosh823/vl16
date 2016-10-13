var React = require('react');

var ControlPanel = React.createClass({

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

    onButtonClick: function(event) {
        this.props.onSwitchView();
        this.hide();
    },

    render: function() {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-right">
                <div className="col-xs-3 flex-xs-top">
                    <div className="card">
                        <div className="card-header">Card</div>
                        <div className="card-block">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Text</p>
                            <a href="#" className="btn btn-primary" onClick={this.onButtonClick}>Switch view</a>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = ControlPanel;