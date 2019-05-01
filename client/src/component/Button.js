import React from 'react';
import PropTypes from 'prop-types';

// static layout - blank component for Buttons
class Button extends React.Component {
    // added event handlers
    handleClick = () => {
        // add props for event handler
        this.props.clickHandler(this.props.name);
        // console.log('click');
    }

    render() {
        return (
            <button
                onClick={this.handleClick} 
            >
                {this.props.name}
            </button>
        );
    }
}

// added props
Button.propTypes = {
    name: PropTypes.string,
    clickHandler: PropTypes.func,
};

export default Button;