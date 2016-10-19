var React = require('react');

var ControlPanel = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            activeLocation: Object.keys(this.props.location.locations)[0]
        };
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    onButtonClick: function (event) {
        this.props.onSwitchView();
        this.hide();
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-right">
                <div className="col-xs-3 flex-xs-top">
                    <div className="card">
                        <div className="card-header">Control Panel</div>
                        <div className="card-block">
                            <h5 className="card-title">Navigation</h5>
                            <p className="card-text">Choose the destination:</p>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                {
                                    Object.keys(this.props.location.locations).map(function (key, index) {
                                        if (key == this.state.activeLocation) return <button type="button" className="btn btn-secondary active">{key}</button>
                                        else return <button type="button" className="btn btn-secondary">{key}</button>
                                    }.bind(this))
                                }
                            </div>
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