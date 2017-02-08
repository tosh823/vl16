var React = require('react');
var SearchResultsListView = require('./SearchResultsListView.jsx');

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
        var url = 'http://95.85.62.204:3000/search?title=' + this.props.search.replace(/ /g, '+');
        $.get(url, function (response) {
            if (response.itemList == true) {
                this.setState({
                    isLoading: false,
                    renderSearch: true,
                    books: response.data
                });
            }
            else {
                this.setState({
                    isLoading: false,
                    renderSearch: false,
                    selectedBook: response.data[0]
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
        var url = 'http://95.85.62.204:3000/search/book?id=' + book.bookId;
        $.get(url, function (response) {
            this.setState({
                isLoading: false,
                selectedBook: response.data
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
            pathAvailable: true
        });
    },

    show: function () {
        this.setState({
            isVisible: true
        });
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="row justify-content-end">
                <div className="col-3 align-self-start">
                    <div className="card mt-3 mr-3">
                        <div className="card-header d-flex justify-content-start">
                            {this.state.renderBack ?
                                <button type="button" className="close mr-2" aria-label="Back" onClick={this.back}>
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                </button>
                                : null
                            }
                            Search
                            <button type="button" className="close ml-auto" aria-label="Close" onClick={this.hide}>
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
                        <div className="text-center">
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
        );
    },

    renderBook: function () {
        return (
            <div className="card-block">
                <h5 className="card-title">Details</h5>
                {this.state.isLoading ?
                    <div>
                        <p className="card-text">Please wait, requesting additional information about selected book...</p>
                        <div className="text-center">
                            <i className="fa fa-spinner fa-3x fa-spin" aria-hidden="true"></i>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={this.state.selectedBook.cover} />
                            </div>
                            <div className="col">
                                <p className="h3">{this.state.selectedBook.title}</p>
                                <p className="h5">By {this.state.selectedBook.author}</p>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">Publisher: {this.state.selectedBook.publisher}</li>
                                    <li className="list-group-item">Type: {this.state.selectedBook.type}</li>
                                    <li className="list-group-item">Details: {this.state.selectedBook.description}</li>
                                    <li className="list-group-item">Language: {this.state.selectedBook.language}</li>
                                    <li className="list-group-item">ISBN: {this.state.selectedBook.isbn}</li>
                                    <li className="list-group-item">Location: {Object.values(this.state.selectedBook.locations[0]).join(' ')}</li>
                                </ul>
                            </div>
                        </div>
                        {this.state.pathAvailable ?
                            <div className="row mt-1">
                                <div className="col-4">
                                    <button type="button" className="btn btn-primary" onClick={this.onPathClick}>Find route</button>
                                </div>
                            </div>
                            :
                            <div className="row mt-1">
                                <div className="col-4">
                                    <button type="button" className="btn btn-danger" onClick={this.onPathClick} disabled>No route</button>
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