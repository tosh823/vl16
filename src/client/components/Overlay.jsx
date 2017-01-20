var React = require('react');

var Overlay = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            showCursor: false,
            cursor: "fa fa-hand-pointer-o cursor",
            cursorText: "",
            bottomText: "Press SPACE to show interface",
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
            bottomText: "Press SPACE to show interface",
        });
    },

    showPointCursor: function() {
        this.setState({
            cursor: "fa fa-hand-pointer-o cursor",
            showCursor: true,
            bottomText: "Click MOUSE to interact with an object",
        });
    },
    
    showGrabCursor: function() {
        this.setState({
            cursor: "fa fa-hand-rock-o cursor",
            showCursor: true,
            bottomText: "Release MOUSE to interact with an object",
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

        var height = (this.state.withNavBar ? "row h-88 align-items-center justify-content-center": "row h-95 align-items-center justify-content-center");

        return (this.state.isVisible ?
            <div className="container overlay">
                <div className={height}>
                    <div className="col-xs-6 align-self-center text-xs-center">
                        <div className="h4">
                            {this.state.showCursor ? <i className={this.state.cursor} aria-hidden="true"></i> : null}
                        </div>
                        <p className="h4">{this.state.cursorText}</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xs-6 align-self-end">
                        <div className="h4 text-xs-center">
                            {this.state.bottomText}
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = Overlay;