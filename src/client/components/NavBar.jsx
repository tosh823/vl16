var React = require('react');
var config = require('../config');

var NavBar = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            currentLocation: this.props.location
        };
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    setCurrentLocation: function(location) {
        this.setState({
            currentLocation: location
        });
    },

    onLocationClick(event) {
        this.props.onWarpTo(config[event.target.id]);
    },

    render: function () {
        return (this.state.isVisible ?
            <nav className="navbar navbar-fixed-top navbar-light bg-faded">
                <a className="navbar-brand" href="#">Virtual Library</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active btn-group">
                        <a className="nav-link dropdown-toggle " type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.currentLocation.name}
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            {
                                Object.keys(config).map(function (value, index) {
                                    if (config[value] !== this.state.currentLocation) {
                                        return <a className="dropdown-item" href="#" key={value} id={value} onClick={this.onLocationClick}>{config[value].name}</a>
                                    }
                                }.bind(this))
                            }
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form className="form-inline pull-xs-right">
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
            : null
        );
    }
});

module.exports = NavBar;