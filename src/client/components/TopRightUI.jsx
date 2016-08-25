var React = require('react');

var TopRightUI = React.createClass({

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
                <div className="col-xs-3 m-t-1">
                    <div className="card">
                        <div className="card-header">Oulu City Library</div>
                        <div className="card-block">
                            <h5 className="card-title">User Interface</h5>
                            <p className="card-text">In development.</p>
                            <button type="button" className="btn btn-primary" id="online_login" onClick={this.props.onChangeView}>Change View</button>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = TopRightUI;