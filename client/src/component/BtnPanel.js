import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

// static layout - blank component for Btn Panel

class BtnPanel extends React.Component {
    // add props for event handlers
    handleClick = (btnName) => {
        this.props.clickHandler(btnName);
    }

    render() {
        return (
            // props added to all buttons for event handlers
            <div className="BtnPanel">
                {/* Rendered Component */}
                {/* 1st Row (AC +/- % /) */}
                <div>
                    <Button name = "AC" clickHandler ={this.handleClick} />
                    <Button name = "+/-" clickHandler ={this.handleClick} />
                    <Button name = "%" clickHandler ={this.handleClick} />
                    <Button name = "÷" clickHandler ={this.handleClick} />
                </div>

                {/* 2nd Row (7 8 9 X) */}
                <div>
                    <Button name = "7" clickHandler ={this.handleClick} />
                    <Button name = "8" clickHandler ={this.handleClick} />
                    <Button name = "9" clickHandler ={this.handleClick} />
                    <Button name = "x" clickHandler ={this.handleClick} />
                </div>

                {/* 3rd Row (4 5 6 -) */}
                <div>
                    <Button name = "4" clickHandler ={this.handleClick} />
                    <Button name = "5" clickHandler ={this.handleClick} />
                    <Button name = "6" clickHandler ={this.handleClick} />
                    <Button name = "-" clickHandler ={this.handleClick} />
                </div>

                {/* 4th Row (1 2 3 +) */}
                <div>
                    <Button name = "1" clickHandler ={this.handleClick} />
                    <Button name = "2" clickHandler ={this.handleClick} />
                    <Button name = "3" clickHandler ={this.handleClick} />
                    <Button name = "+" clickHandler ={this.handleClick} />
                </div>

                {/* 5th Row (0 . =) */}
                <div>
                    <Button name = "0" clickHandler ={this.handleClick} />
                    <Button name = "." clickHandler ={this.handleClick} />
                    <Button name = "=" clickHandler ={this.handleClick} />
                </div>
            </div>
        );
    }
}

BtnPanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default BtnPanel;