var React = require('react');
var SearchResultsListView = require('./SearchResultsListView.jsx');
var LibraryAPI = require('../LibraryAPI');

var SearchPanel = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            isLoading: true,
            books: []
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
                isLoading: false,
                books: data
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

        /*
        {(!this.state.isLoading ?
                            <div className="card-block">
                                <SearchResultsListView books={this.state.books} />
                            </div>
                            : null
                        )}
        */

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
                            <p className="card-text">{this.state.isLoading ? 'Please wait, request may take up to several seconds' : 'Click on item to see addition information'}</p>
                            <div className="text-xs-center">
                                {this.state.isLoading ? <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i> : null}
                            </div>
                            {(!this.state.isLoading ?
                                <SearchResultsListView books={this.state.books} />
                                : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
            : null
        );
    }

});

module.exports = SearchPanel;