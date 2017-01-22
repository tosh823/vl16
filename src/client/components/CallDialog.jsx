var React = require('react');

var CallDialog = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            renderCall: false,
            stuffStream: null,
        }
    },

    stream: null,

    componentDidMount: function () {

    },

    close: function () {
        this.setState({
            isVisible: false
        });
    },

    call: function () {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(function (stream) {
            // Render webcam video to panel
            this.stream = stream;
            // Set streaming
            this.props.startCall(stream, this.renderStream, null, this.stopCall);
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    },

    renderStream: function (stream) {
        this.setState({
            renderCall: true,
            stuffStream: URL.createObjectURL(stream)
        });
    },

    stopCall: function () {
        //if (this.stream != null) this.stream.stop();
        this.setState({
            stuffStream: null,
            renderCall: false,
        });
        this.props.stopCall();
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row align-items-center justify-content-center stretch-y">
                <div className="col-6 align-self-center">
                    <div className="card text-center">
                        <div className="card-header">
                            Oulu City Library
                            <button type="button" className="close" aria-label="Close" onClick={this.close}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        {this.state.renderCall ?
                            <div className="card-block">
                                <h5 className="card-title">Service Point</h5>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <video autoPlay id="source" src={this.state.stuffStream} />
                                </div>
                                <button type="button" className="btn btn-primary mt-3" onClick={this.stopCall}>Cancel</button>
                            </div>
                            :
                            <div className="card-block">
                                <h5 className="card-title">Service Point</h5>
                                <p className="card-text">Look at me!</p>
                                <button type="button" className="btn btn-primary" onClick={this.call}>Call</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            :
            null
        );
    }
});

module.exports = CallDialog;