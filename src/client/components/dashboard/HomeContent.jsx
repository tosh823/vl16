var React = require('react');
var InfoCard = require('./InfoCard.jsx');

var HomeContent = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    render: function () {
        return (this.state.isVisible ?
            <div>
                <div className="row flex-items-xs-center">
                    <div className="col-xs-8">
                        <h1 className="display-1 m-l-1">Home</h1>
                    </div>
                </div>
                <div className="row flex-items-xs-center">
                    <div className="col-xs-2">
                        <InfoCard />
                    </div>
                    <div className="col-xs-2">
                        <InfoCard />
                    </div>
                    <div className="col-xs-2">
                        <InfoCard />
                    </div>
                    <div className="col-xs-2">
                        <InfoCard />
                    </div>
                </div>
            </div>
            :
            null
        );
    }
});

module.exports = HomeContent;