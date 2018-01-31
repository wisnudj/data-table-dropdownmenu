import React, { Component } from 'react';

//component
import Tabledata from './components/Tabledata'
import Dropdownsearch from './components/Dropdownsearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdownsearch />
        <Tabledata />
      </div>
    );
  }
}

export default App;
