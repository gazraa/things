import React, { Component } from 'react';


// import components
import Header from './components/Header';
import CardGrid from './components/CardGrid';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />

          <CardGrid />
          
      </div>
    );
  }
}

export default App;
