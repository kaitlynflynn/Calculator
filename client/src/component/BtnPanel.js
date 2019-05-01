import React from 'react';
import Button from './Button';

// static layout - blank component for Btn Panel

class BtnPanel extends React.Component {
    render() {
        return (
            <div className="BtnPanel">
                {/* Rendered Component */}
                {/* 1st Row (AC +/- % /) */}
                <div>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>

                {/* 2nd Row (7 8 9 X) */}
                <div>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>

                {/* 3rd Row (4 5 6 -) */}
                <div>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>

                {/* 4th Row (1 2 3 +) */}
                <div>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
                
                {/* 5th Row (0 . =) */}
                <div>
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
        );
    }
}

export default BtnPanel;