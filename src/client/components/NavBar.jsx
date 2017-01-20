var React = require('react');
var config = require('../config');

var NavBar = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            currentLocation: this.props.location,
            indicator: "orange"
        };
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    show: function () {
        this.setState({
            isVisible: true
        });
    },

    setCurrentLocation: function (location) {
        this.setState({
            currentLocation: location
        });
    },

    setWaitingIndicator: function () {
        this.setState({
            indicator: "orange"
        });
    },

    setOnlineIndicator: function () {
        this.setState({
            indicator: "green"
        });
    },

    setOfflineIndicator: function () {
        this.setState({
            indicator: "red"
        });
    },

    onLocationClick(event) {
        this.props.onWarpTo(config[event.target.id]);
    },

    onCameraClick(event) {
        this.props.onChangeCamera();
    },

    onCallClick(event) {
        this.props.onCall();
    },

    onNavigationClick(event) {
        this.props.onNavigation();
    },

    onAboutClick(event) {
        this.props.onAbout();
    },

    onSearchClick(event) {
        var query = this.refs.searchRequest.value;
        this.props.onSearch(query);
    },

    onSearchKeyDown(event) {
        // When pressing enter in text field, launch searching
        if (event.keyCode === 13) {
            event.preventDefault();
            this.onSearchClick();
        }
    },

    render: function () {
        return (this.state.isVisible ?
            <nav className="navbar navbar-toggleable-md navbar-light fixed-top bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Virtual Library <i className={"fa fa-circle indicator " + this.state.indicator} aria-hidden="true"></i></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="http://www.ouka.fi/oulu/library" target="_blank">Home</a>
                        </li>
                        <li className="nav-item active btn-group">
                            <a className="nav-link dropdown-toggle " href="#location_current" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.currentLocation.name}
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                {
                                    Object.keys(config).map(function (value, index) {
                                        if (config[value] !== this.state.currentLocation) {
                                            return <a className="dropdown-item" href="#location_1" key={value} id={value} onClick={this.onLocationClick}>{config[value].name}</a>
                                        }
                                    }.bind(this))
                                }
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#navigation" onClick={this.onNavigationClick}>Navigation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#camera" onClick={this.onCameraClick}>Camera</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#call" onClick={this.onCallClick}>Call</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={this.onAboutClick}>About</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" ref="searchRequest" type="text" placeholder="Search" onKeyDown={this.onSearchKeyDown} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.onSearchClick}>Search</button>
                    </form>
                </div>

            </nav>
            : null
        );
    }
});

module.exports = NavBar;