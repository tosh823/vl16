var React = require('react');
var SearchResultsListView = require('./SearchResultsListView.jsx');
var LibraryAPI = require('../LibraryAPI');

var SearchPanel = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
            renderSearch: true,
            renderBack: false,
            isLoading: true,
            pathAvailable: true,
            pathMessage: '',
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
        api.search(this.props.search, function (itemList, data) {
            // Hide spinner
            if (itemList == true) {
                this.setState({
                    isLoading: false,
                    renderSearch: true,
                    books: data
                });
            }
            else {
                this.setState({
                    isLoading: false,
                    renderSearch: false,
                    selectedBook: data[0]
                });
            }
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
                renderBack: true,
                isLoading: false,
                selectedBook: data
            });
        }.bind(this));
    },

    onPathClick: function (event) {
        var shelf = this.props.onCheckPath(this.state.selectedBook);
        if (shelf != null && shelf.length > 0) {
            this.props.onShowPath(shelf[0]);
            this.setState({
                pathAvailable: true,
                pathMessage: 'Success! The route is built.'
            });
        }
        else {
            console.log('Cannot find the path');
            this.setState({
                pathAvailable: false,
                pathMessage: 'Sorry, we can provide route for this book.'
            });
        }
    },

    hide: function () {
        this.setState({
            isVisible: false,
            renderBack: false,
            pathMessage: ''
        });
    },

    back: function () {
        // Return to search results and resetting everything back to normal
        this.setState({
            renderSearch: true,
            renderBack: false,
            pathMessage: '',
            pathAvailable: true,
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
                            {this.state.renderBack ?
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
                                            <p className="card-text">Found {this.state.books.length}books.</p>
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
                                            <ul className="list-group">
                                                <li className="list-group-item">Authors: {this.state.selectedBook.authors.join('; ')}</li>
                                                <li className="list-group-item">Publisher: {this.state.selectedBook.publisher.join(' ')}</li>
                                                <li className="list-group-item">{this.state.selectedBook.type}</li>
                                                <li className="list-group-item">Details: {this.state.selectedBook.description}</li>
                                                <li className="list-group-item">Language: {this.state.selectedBook.language}</li>
                                                <li className="list-group-item">ISBN: {this.state.selectedBook.isbn}</li>
                                                <li className="list-group-item">Location: {Object.values(this.state.selectedBook.locations[0]).join(' ')}</li>
                                            </ul>
                                            <div className="row m-t-1">
                                                <div className="col-xs">
                                                    {this.state.pathAvailable ?
                                                        <button type="button" className="btn btn-primary" onClick={this.onPathClick}>Find path</button>
                                                        :
                                                        <button type="button" className="btn btn-primary" onClick={this.onPathClick} disabled>Find path</button>
                                                    }
                                                </div>
                                                <div className="col-xs-9">
                                                    <p className="h5">{this.state.pathMessage}</p>
                                                </div>
                                            </div>
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