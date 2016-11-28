var React = require('react');
var SearchResultsListView = require('./SearchResultsListView.jsx');
var LibraryAPI = require('../LibraryAPI');

var SearchPanel = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            renderSearch: true,
            isLoading: true,
            selectedBook: null,
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

    onBookClick: function (book) {
        this.setState({
            renderSearch: false,
            selectedBook: book,
            isLoading: true
        });
        var api = new LibraryAPI();
        api.getBook(book.href, function (data) {
            // Hide spinner
            this.setState({
                isLoading: false,
                selectedBook: data
            });
        }.bind(this));
    },

    hide: function () {
        this.setState({
            isVisible: false
        });
    },

    back: function() {
        this.setState({
            renderSearch: true
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
                            {!this.state.renderSearch ?
                                <button type="button" className="close pull-xs-left m-r-1" aria-label="Back" onClick={this.back}>
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                </button>
                                : null
                            }
                            Search
                            <button type="button" className="close" aria-label="Close" onClick={this.hide}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        {
                            (this.state.renderSearch ?
                                <div className="card-block">
                                    <h5 className="card-title">Results for <em>{'"' + this.props.search + '"'}</em></h5>
                                    {(this.state.isLoading ?
                                        <div>
                                            <p className="card-text">Please wait, request may take up to several seconds...</p>
                                            <div className="text-xs-center">
                                                <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <p className="card-text">Found {this.state.books.length} books.</p>
                                            <p className="card-text">Click on item to see addition information.</p>
                                            <SearchResultsListView books={this.state.books} onBookClick={this.onBookClick} />
                                        </div>
                                    )}
                                </div>
                                :
                                <div className="card-block">
                                    <h5 className="card-title">{this.state.selectedBook.title}</h5>
                                    {this.state.isLoading ?
                                        <div>
                                            <p className="card-text">Please wait, requesting additional information about selected book...</p>
                                            <div className="text-xs-center">
                                                <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <p className="card-text">Authors: {this.state.selectedBook.authors.join('; ')}</p>
                                            <p className="card-text">Publisher: {this.state.selectedBook.publisher.join(' ')}</p>
                                            <p className="card-text">{this.state.selectedBook.type}</p>
                                            <p className="card-text">Collection: {this.state.selectedBook.collection}</p>
                                            <p className="card-text">Details: {this.state.selectedBook.description}</p>
                                            <p className="card-text">Language: {this.state.selectedBook.language}</p>
                                            <p className="card-text">ISBN: {this.state.selectedBook.isbn}</p>
                                            <p className="card-text">Call numbers: {this.state.selectedBook.locations.join(' - ')}</p>
                                            <a href="#" className="btn btn-primary">Find path</a>
                                        </div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            : null
        );
    }

});

module.exports = SearchPanel;