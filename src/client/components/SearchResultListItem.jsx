var React = require('react');

var SearchResultsListItem = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
        };
    },

    componentDidMount: function() {
        
    },

    onItemClick: function(event) {
        this.props.onBookClick(this.props.book);
    },

    render: function () {
        return (this.state.isVisible ?
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start pb-0" onClick={this.onItemClick}>
                <p className="h5">{this.props.book.title}</p>
                <p>{this.props.book.author}</p>
            </a>
            : null
        );
    }
});

module.exports = SearchResultsListItem;