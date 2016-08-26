var React = require('react');

var LocationDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    hide: function() {
        this.setState({
            isVisible: false
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-right stretch">
                
            </div>
            : null
        );
    }
});

module.exports = LocationDialog;