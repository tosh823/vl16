var React = require('react');
var config = require('../config');

var LocationDialog = React.createClass({

    getInitialState: function () {

        var locationItems = [];
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                locationItems.push({
                    id: key,
                    active: false,
                    disabled: false,
                    location: config[key]
                });
            }
        }

        return {
            isVisible: true,
            items: locationItems
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
        var currentSelected = null;
        for (var i = 0; i < this.state.items; i++) {
            if (this.state.items[i].active) currentSelected = this.state.items[i].location;
        }

        $('#modalDialog').modal('hide');
        this.setState({
            isVisible: false
        });
        this.props.onSubmit(currentSelected);
    },

    show: function (currentLocation) {
        var locationItems = this.state.items;
        locationItems = locationItems.map(function(item) {
            if (item.location == currentLocation) {
                item.active = true;
            }
            else {
                item.active = false;
            }
            return item;
        });

        this.setState({
            isVisible: true,
            items: locationItems
        });
        $('#modalDialog').modal('show');
    },

    changeLocation: function (event) {
        var selected = event.target.id;
        var locationItems = this.state.items;
        locationItems = locationItems.map(function(item) {
            if (item.id == selected) {
                item.active = true;
            }
            else {
                item.active = false;
            }
            return item;
        });
        this.setState({
            items: locationItems
        });
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
                            <h4 className="modal-title">Choose a location to be moved to</h4>
                        </div>
                        <div className="modal-body">
                            <div className="list-group">
                                {
                                    this.state.items.map(function(item) {
                                        if (item.active) return <button className="list-group-item list-group-item-action active" type="button" key={item.id} id={item.id} onClick={this.changeLocation}>{item.location.name}</button>
                                        else if (item.disabled) return <button className="list-group-item list-group-item-action disabled" type="button" key={item.id} id={item.id} onClick={this.changeLocation}>{item.location.name}</button>
                                        else return <button className="list-group-item list-group-item-action" type="button" key={item.id} id={item.id} onClick={this.changeLocation}>{item.location.name}</button>
                                    }.bind(this))
                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.hide}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div> 
            : null
        );
    }
});

module.exports = LocationDialog;