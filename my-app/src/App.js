import React, { Component } from 'react';

// import helpers


// import components
import CardGrid from './components/CardGrid';

import './css/App.css';
import './css/simple-grid.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <CardGrid />
          
      </div>
    );
  }
}

export default App;
