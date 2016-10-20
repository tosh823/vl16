var React = require('react');
var LibraryAPI = require('../LibraryAPI');

var SearchPanel = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            isLoading: false
        };
    },

    componentDidMount: function () {
        // Start searching
        // Show spinner
        this.setState({
            isLoading: true
        });
        var api = new LibraryAPI();
        api.search(this.props.search, function (data) {
            // Hide spinner
            this.setState({
                isLoading: false
            });
        }.bind(this));
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
            <div className="row flex-items-xs-right">
                <div className="col-xs-3 flex-xs-top">
                    <div className="card m-t-1 m-r-1">
                        <div className="card-header">
                            Search
                            <button type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="card-block">
                            <h5 className="card-title">Results for <em>{'"' + this.props.search + '"'}</em></h5>
                            <p className="card-text">Click on item to see addition information</p>
                            {this.state.isLoading ? <i className="fa fa-spinner spinner" aria-hidden="true"></i> : null}
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }

});

module.exports = SearchPanel;