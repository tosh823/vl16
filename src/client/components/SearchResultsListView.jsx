var React = require('react');
var SearchResultsListItem = require('./SearchResultListItem.jsx');

var SearchResultsListView = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
        };
    },

    componentDidMount: function () {

    },

    render: function () {

        return (this.state.isVisible ?
            <div className="limited-h-50">
                <div className="list-group">
                    {
                        this.props.books.map(function (book, index) {
                            return <SearchResultsListItem key={index} book={book} onBookClick={this.props.onBookClick} />
                        }.bind(this))
                    }
                </div>
            </div>
            : null
        );
    }
});

module.exports = SearchResultsListView;