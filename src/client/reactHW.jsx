var React = require('react');

var HellowWorld = React.createClass({
    render: function () {
        return (
            <div className="row flex-items-md-middle stretch">
                <div className="col-md">
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Login</h4>
                            <p className="card-text">Hello Virtual Library</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HellowWorld;
