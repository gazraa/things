import React, { Component } from 'react';

// import helpers


// import components
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import CardDetail from './components/CardDetail';

import './css/App.css';
import './css/simple-grid.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />

          <CardGrid />

          <CardDetail />
          
      </div>
    );
  }
}

export default App;
