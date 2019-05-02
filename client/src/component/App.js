import React from 'react';
// import './App.css';
import Display from './Display';
import BtnPanel from './BtnPanel';

class App extends React.Component {
  // add props for event handler
  handleClick = (btnName) => {
    console.log('click', btnName); // shows to console what btn was clicked
  }

  render() {
    return (
      <div className="App">
        {/* Rendered Components */}
        <Display 
          value = "123"
        />
        <BtnPanel 
          clickHandler = {this.handleClick}
        />
      </div>
    );
  }
}

export default App;
