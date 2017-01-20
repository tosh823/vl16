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
            isLoading: true,
            renderBack: true
        });
        var api = new LibraryAPI();
        api.getBook(book.href, function (data) {
            // Hide spinner
            console.log(data);
            this.setState({
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
                pathAvailable: true
            });
        }
        else {
            this.setState({
                pathAvailable: false
            });
        }
    },

    hide: function () {
        this.setState({
            isVisible: false,
            renderBack: false,
        });
    },

    back: function () {
        // Return to search results and resetting everything back to normal
        this.setState({
            renderSearch: true,
            renderBack: false,
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
                                this.renderListView()
                                :
                                this.renderBook()
                            )
                        }
                    </div>
                </div>
            </div>
            : null
        );
    },

    renderListView: function () {
        return (
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
        );
    },

    renderBook: function () {
        return (
            <div className="card-block">
                <h5 className="card-title">Details</h5>
                {this.state.isLoading ?
                    <div>
                        <p className="card-text">Please wait, requesting additional information about selected book...</p>
                        <div className="text-xs-center">
                            <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="row">
                            <div className="col-xs-4">
                                <img className="img-fluid" src={this.state.selectedBook.cover} />
                            </div>
                            <div className="col-xs">
                                <p className="h3">{this.state.selectedBook.title}</p>
                                <p className="h5">By {this.state.selectedBook.authors.join(', ')}</p>
                            </div>
                        </div>
                        <div className="row m-t-1">
                            <div className="col-xs">
                                <ul className="list-group">
                                    <li className="list-group-item">Publisher: {this.state.selectedBook.publisher.join(' ')}</li>
                                    <li className="list-group-item">Type: {this.state.selectedBook.type}</li>
                                    <li className="list-group-item">Details: {this.state.selectedBook.description}</li>
                                    <li className="list-group-item">Language: {this.state.selectedBook.language}</li>
                                    <li className="list-group-item">ISBN: {this.state.selectedBook.isbn}</li>
                                    <li className="list-group-item">Location: {Object.values(this.state.selectedBook.locations[0]).join(' ')}</li>
                                </ul>
                            </div>
                        </div>
                        {this.state.pathAvailable ?
                            <div className="row m-t-1">
                                <div className="col-xs-4">
                                    <button type="button" className="btn btn-primary" onClick={this.onPathClick}>Find path</button>
                                </div>
                                <div className="col-xs text-center">
                                    <p>Click to build route.</p>
                                </div>
                            </div>
                            :
                            <div className="row m-t-1">
                                <div className="col-xs-4">
                                    <button type="button" className="btn btn-primary" onClick={this.onPathClick} disabled>Find path</button>
                                </div>
                                <div className="col-xs text-center">
                                    <p>Sorry, can't provide route for this book.</p>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    },

});

module.exports = SearchPanel;