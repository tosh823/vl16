var React = require('react');

var ControlPanel = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            activeSpace: Object.keys(this.props.location.locations)[0]
        };
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    onActiveSpaceChange: function (event) {
        var selected = event.target.id;
        this.setState({
            activeSpace: selected
        });
    },

    onLocationSelect: function (event) {
        var selected = event.target.id;
        this.props.onNavigateTo(selected);
    },

    onButtonClick: function (event) {
        this.props.onSwitchView();
        this.hide();
    },

    render: function () {

        var navs = [];
        for (var space in this.props.location.locations) {
            var buttonClass = (this.state.activeSpace == space ? "btn btn-primary" : "btn btn-secondary");
            navs.push(
                <button className={buttonClass} type="button" key={space} id={space} onClick={this.onActiveSpaceChange}>{space}</button>
            );
        }

        var locations = [];
        for (var location in this.props.location.locations[this.state.activeSpace]) {
            var code = this.props.location.locations[this.state.activeSpace][location];
            locations.push(
                <button type="button" className="list-group-item list-group-item-action" key={code} id={code} onClick={this.onLocationSelect}>{location}</button>
            );
        }
        if (locations.length == 0) {
            locations.push(
                <li className="list-group-item" key="no-code">No locations for this space, sorry.</li>
            );
        }

        return (this.state.isVisible ?
            <div className="row justify-content-end">
                <div className="col-3 align-self-start">
                    <div className="card mt-2 mr-2">
                        <div className="card-header">
                            Navigation
                            <button type="button" className="close" aria-label="Close" onClick={this.hide}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Locations</h5>
                            <p className="card-text">Choose the location and destination:</p>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                {navs}
                            </div>
                        </div>
                        <div className="card-block">
                            <div className="limited-h-50">
                                <div className="list-group">
                                    {locations}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = ControlPanel;