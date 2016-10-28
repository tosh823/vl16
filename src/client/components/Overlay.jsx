var React = require('react');

var Overlay = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            showCursor: false,
            cursor: "fa fa-hand-pointer-o cursor",
            withNavBar: false,
        };
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    hideCursor: function() {
        this.setState({
            showCursor: false,
        });
    },

    showPointCursor: function() {
        this.setState({
            cursor: "fa fa-hand-pointer-o cursor",
            showCursor: true
        });
    },
    
    showGrabCursor: function() {
        this.setState({
            cursor: "fa fa-hand-rock-o cursor",
            showCursor: true
        });
    },

    show: function () {
        this.setState({
            isVisible: true
        });
    },

    shift: function() {
        this.setState({
            withNavBar: !this.state.withNavBar
        });
    },

    render: function () {

        var height = (this.state.withNavBar ? "row h-88 flex-items-xs-center": "row h-95 flex-items-xs-center");

        return (this.state.isVisible ?
            <div className="container overlay">
                <div className={height}>
                    <div className="col-xs-6 flex-xs-middle text-xs-center">
                        <div className="h4">
                            {this.state.showCursor ? <i className={this.state.cursor} aria-hidden="true"></i> : null}
                        </div>
                        <p className="h4">Label</p>
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