import React, { Component } from 'react';
import axios from 'axios';

class CardGrid extends Component {

  state = {
    cards: []
  }
  
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job`)
      .then(res => {
        
        const cards = res.data.Products;
        this.setState({ cards });
      });
  }

  render() {
    return (
      <ul>
        {this.state.cards.map(card =>
          <li key={card.ProductId}>{card.Title}</li>
        )}
    </ul>
    )
  }
}

export default CardGrid
