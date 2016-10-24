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
                            <button type="button" className="close" aria-label="Close" onClick={this.hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {
                            (this.state.renderSearch ?
                                <div className="card-block">
                                    <h5 className="card-title">Results for <em>{'"' + this.props.search + '"'}</em></h5>
                                    {(this.state.isLoading ?
                                        <div>
                                            <p className="card-text">Please wait, request may take up to several seconds</p>
                                            <div className="text-xs-center">
                                                <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <p className="card-text">Click on item to see addition information</p>
                                            <SearchResultsListView books={this.state.books} onBookClick={this.onBookClick} />
                                        </div>
                                    )}
                                </div>
                                :
                                <div className="card-block">
                                    <h5 className="card-title">{this.state.selectedBook.title}</h5>
                                    {(this.state.isLoading ?
                                        <div>
                                            <p className="card-text">Please wait, requesting additional information about selected book</p>
                                            <div className="text-xs-center">
                                                <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <p className="card-text">Authors: {this.state.selectedBook.authors.join('; ')}</p>
                                            <p className="card-text">Publisher: {this.state.selectedBook.publisher.join(' ')}</p>
                                            <p className="card-text">{this.state.selectedBook.type}</p>
                                            <p className="card-text">Details: {this.state.selectedBook.description}</p>
                                            <p className="card-text">Language: {this.state.selectedBook.language}</p>
                                            <p className="card-text">ISBN: {this.state.selectedBook.isbn}</p>
                                        </div>
                                    )}
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