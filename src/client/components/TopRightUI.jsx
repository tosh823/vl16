var React = require('react');
var config = require('../config');

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

    onChangeLocation(event) {
        this.props.onChangeLocation(config[event.target.id]);
    },

    onChangeView(event) {
        this.props.onChangeView();
    },

    render: function () {

        var locationOptions = [];
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                if (config[key].name != this.props.libraryName) {
                    locationOptions.push(
                        <button className="dropdown-item" type="button" key={key} id={key} onClick={this.onChangeLocation}>{config[key].name}</button>
                    );
                }
            }
        }

        return (this.state.isVisible ?
            <div className="row justify-content-end stretch">
                <div className="col-3 m-t-1">
                    <div className="card">
                        <div className="card-header">{this.props.libraryName}</div>
                        <div className="card-block">
                            <h5 className="card-title">User Interface (In development)</h5>
                            <p className="card-text">Welcome to Virtual Library project!</p>
                        </div>
                        <div className="card-block">
                            <label htmlFor="locationSelection">Change Location.</label>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                                    {this.props.libraryName}
                                </button>
                                <div className="dropdown-menu" id="locationSelectionDropDown" aria-labelledby="dropdownMenuButton">
                                    {locationOptions}
                                </div>
                            </div>
                        </div>
                        <div className="card-block">
                            <p className="card-text">Change to FPS mode.</p>
                            <button type="button" className="btn btn-primary" onClick={this.onChangeView}>Change View</button>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = TopRightUI;