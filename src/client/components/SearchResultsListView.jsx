var React = require('react');
var SearchResultsListItem = require('./SearchResultListItem.jsx');

var SearchResultsListView = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
        };
    },

    componentDidMount: function() {
        
    },

    render: function () {
    
        return (this.state.isVisible ?
            <div className="list-group list-group-flush limited-h-50">
                {
                    this.props.books.map(function(book, index) {
                        return <SearchResultsListItem key={index} book={book} onBookClick={this.props.onBookClick} /> 
                    }.bind(this))
                }
            </div>
            : null
        );
    }
});

module.exports = SearchResultsListView;