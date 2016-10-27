var React = require('react');

var Overlay = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            showCursor: true
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

    render: function () {
        return (this.state.isVisible ?
            <div className="container stretch-y overlay">
                <div className="row h-80 flex-items-xs-center stretch-y">
                    <div className="col-xs-6 flex-xs-middle">
                        <div className="h4 text-xs-center">
                            {this.state.showCursor ? <i className="fa fa-hand-pointer-o cursor" aria-hidden="true"></i> : null}
                        </div>
                    </div>
                </div>
                <div className="row flex-items-xs-center">
                    <div className="col-xs-6 flex-xs-bottom">
                        <div className="h4 text-xs-center">
                            Press SPACE to show interface
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = Overlay;