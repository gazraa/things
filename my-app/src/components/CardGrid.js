import React, { Component } from 'react';
import axios from 'axios';

import '../css/CardGrid.css';

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
      <div className="CardGrid">
        {this.state.cards.map(card =>
          <div className="card-item-container" key={card.ProductId}>
            <div className="card-item">
              <div className="card-item-image-container">
                <img src={card.ProductImage.Link.Href} alt={card.Title} />
              </div>
              <div className="card-item-reviews">
                stars ({card.Reviews.ReviewCount})
              </div>
              
            </div>
          </div>
        )}
    </div>
    )
  }
}

export default CardGrid
