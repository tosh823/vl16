var React = require('react');

var InfoCard = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    getDefaultProps: function () {
        return {
            title: 'Power Level',
            text: '9000',
            icon: 'fa-bolt'
        };
    },

    render: function () {
        return (this.state.isVisible ?
            <div className="card card-inverse card-success">
                <div className="card-block bg-success">
                    <div className="rotate">
                        <i className={'fa ' + this.props.icon + ' fa-5x'}></i>
                    </div>
                    <h6 className="text-uppercase">{this.props.title}</h6>
                    <h1 className="display-1">{this.props.text}</h1>
                </div>
            </div>
            :
            null
        );
    }
});

module.exports = InfoCard;