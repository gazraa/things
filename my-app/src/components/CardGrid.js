import React, { Component } from 'react';
import axios from 'axios';

import ReviewStars from './ReviewStars';

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

  cardDetail(e) {
    e.preventDefault();
    
    document.getElementById('CardDetail').classList.add('show');

  }

  render() {
    return (

      <div className="CardGrid">
        {this.state.cards.map(card =>
          <div className="card-item-container" key={card.ProductId}>
            <div className="card-item">
              <div className="card-item-image-container">
                <a href="" onClick={this.cardDetail}>
                  <img src={card.ProductImage.Link.Href} alt={card.Title} />
                </a>
              </div>
              <ReviewStars reviewRating={card.Reviews.AverageStarReviewRating} reviewCount={card.Reviews.ReviewCount} />             
            </div>
          </div>
        )}
    </div>
    )
  }
}

export default CardGrid
