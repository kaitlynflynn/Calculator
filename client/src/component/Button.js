import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// static layout - blank component for Buttons
class Button extends React.Component {
    // added event handlers
    handleClick = () => {
        // add props for event handler
        this.props.clickHandler(this.props.name);
        // console.log('click');
    }

    render() {
        let className = "button";
        if (this.props.orange) {
            className += " orange";
        }
        if (this.props.wide) {
            className += " wide";
        }

        let className2 = "button";
        if (this.props.charcoal) {
            className += " charcoal";
        }
        if (this.props.wide) {
            className += " wide";
        }

        return (
            <div className = {className}>
                <button onClick = {this.handleClick}
                >
                {this.props.name}
                </button>
            </div>
        );
    }
}

// added props
Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    charcoal: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
};

export default Button;