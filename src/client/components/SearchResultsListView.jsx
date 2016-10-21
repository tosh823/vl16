var React = require('react');
var SearchResultsListItem = require('./SearchResultListItem.jsx');

var SearchResultsListView = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
        };
    },

    componentDidMount: function() {
        console.log('List view mounted');
        console.log(SearchResultsListItem);
    },

    render: function () {

        var searchResults = [];
        for (var i = 0; i < this.props.books; i++) {
            var book = this.props.books[i];
            searchResults.push(
                <SearchResultsListItem book={book} />
            );
        }

        return (this.state.isVisible ?
            <div className="list-group list-group-flush limited-h-50">
                {
                    this.props.books.map(function(book) {
                        return <SearchResultsListItem book={book} />
                    })
                }
            </div>
            : null
        );
    }
});

module.exports = SearchResultsListView;