var React = require('react');

var SearchResultsListItem = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true,
        };
    },

    componentDidMount: function() {
        console.log('List item mounted');
    },

    render: function () {
        return (this.state.isVisible ?
            <a href="#" className="list-group-item small" >
                <p className="list-group-item-heading h6">{this.props.book.title}</p>
                <p className="list-group-item-text">{this.props.book.author}</p>
            </a>
            : null
        );
    }
});

module.exports = SearchResultsListItem;