var React = require('react');

var LoginDialog = React.createClass({

    getInitialState: function() {
        return { 
            userName: 'Tu turu',
            isVisible: true 
        };
    },
    handleNameInput: function(event) {
        this.setState({
            userName: event.target.value
        });
    },

    handleSumbit: function(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.userName);
        this.setState({
            isVisible: false
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row flex-items-xs-middle flex-items-xs-center stretch">
                <div className="col-xs-6">
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Login</h4>
                            <p className="card-text">Enter your name below:</p>
                            <form onSubmit={this.handleSumbit}>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-xs-2 col-form-label">Name</label>
                                    <div className="col-xs-10">
                                        <input className="form-control" id="example-text-input" type="text" value={this.state.userName} onChange={this.handleNameInput} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }
});

module.exports = LoginDialog;
