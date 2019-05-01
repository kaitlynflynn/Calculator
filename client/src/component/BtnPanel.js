import React from 'react';
import Button from './Button';

// static layout - blank component for Btn Panel

class BtnPanel extends React.Component {
    render() {
        return (
            <div className="BtnPanel">
                {/* Rendered Component */}
                <Button />
            </div>
        );
    }
}

export default BtnPanel;