import React from 'react';
// import './App.css';
import Display from './Display';
import BtnPanel from './BtnPanel';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        {/* Rendered Components */}
        <Display />
        <BtnPanel />
      </div>
    );
  }
}

export default App;
