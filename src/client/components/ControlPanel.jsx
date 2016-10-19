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

    onLocationSelect: function(event) {
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
            var navLink = (this.state.activeSpace == space ? "nav-link active" : "nav-link");
            navs.push(
                <li className="nav-item" key={"li-" + space}>
                    <a className={navLink} type="button" key={space} id={space} onClick={this.onActiveSpaceChange}>{space}</a>
                </li>
            );
        }

        var locations = [];
        for (var location in this.props.location.locations[this.state.activeSpace]) {
            var code = this.props.location.locations[this.state.activeSpace][location];
            locations.push(
                <button type="button" className="list-group-item list-group-item-action" key={code} id={code} onClick={this.onLocationSelect}>{location}</button>
            );
        }

        /*
        <div className="list-group list-group-flush">
                            {locations}
                        </div>
        */

        return (this.state.isVisible ?
            <div className="row flex-items-xs-right">
                <div className="col-xs-3 flex-xs-top">
                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills float-xs-left">
                                {navs}
                            </ul>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Navigation</h5>
                            <p className="card-text">Choose the destination:</p>
                            <a href="#" className="btn btn-primary" onClick={this.onButtonClick}>Switch view</a>
                        </div>
                        <div className="card-block">
                            <div className="list-group list-group-flush limited-h-50">
                                {locations}
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