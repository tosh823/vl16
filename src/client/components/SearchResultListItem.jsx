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
            <a href="#" className="list-group-item small" onClick={this.onItemClick}>
                <p className="list-group-item-heading h6">{this.props.book.title}</p>
                <p className="list-group-item-text">{this.props.book.author}</p>
            </a>
            : null
        );
    }
});

module.exports = SearchResultsListItem;