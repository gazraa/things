import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewStars from './ReviewStars';

import '../css/CardGrid.scss';
import '../css/Preloader.scss';

class CardGrid extends Component {

  state = {
    cards: [],
    currentCard: '',
    cardDetail: ''
  }
  
  componentDidMount() {
    // get data from API
    axios.get(`https://cors-anywhere.herokuapp.com/https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job`)
      .then(response => {
        const cards = response.data.Products;
        this.setState({ cards });
      })
      .catch(function (error) {
        if (error.response) {    
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx


        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            


        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
      })
      .then(function () {
          // always executed
          
      
      });
  }

  hideDetail(e){
    // set css classes on modal container
    document.getElementById('CardDetailModal').classList.remove('show');
    document.getElementById('CardDetailModal').classList.add('hide');
  }

  cardDetail(c,e){

    e.preventDefault();

    // need to cleanse value of c for anything dodgy

    const currentCard = c; 
    this.setState({ currentCard });

    ReactDOM.render(
      <Fragment>
        <div className="card-detail-loader">
          <div className="dash one"></div>
          <div className="dash two"></div>
          <div className="dash three"></div>
          <div className="dash four"></div>
        </div>
      </Fragment>
      ,
      document.getElementById('CardDetail')
    );

    document.getElementById('CardDetailModal').classList.add('show');
    document.getElementById('CardDetailModal').classList.remove('hide');

    axios.get(`https://cors-anywhere.herokuapp.com/https://www.moonpig.com/uk/api/product/product/?mpn=`+c)
      .then(function (response) {
        // handle success
        // console.log('result is: ' + response.data);
        const cardDetail = response.data;
        this.setState({ cardDetail });

        ReactDOM.render(
          <Fragment>
            <div className="card-detail-header">
              <button onClick={(e) => this.hideDetail(e)}>X</button>
            </div>
            <div className="card-detail-content">
              <div className="card-detail-image">
                <img src={ cardDetail.ImageUrls[0].ImageUrl } alt={cardDetail.Title } />
              </div>
              <div className="card-detail-information">
                <h2>{ cardDetail.Title }</h2>
                <div className="card-detail-information-description" dangerouslySetInnerHTML={{ __html: cardDetail.Description }}></div>
                <div className="card-detail-information-price"><span className="card-detail-information-price-type">{ cardDetail.Size.DisplayName }:</span><span className="card-detail-information-price-currency">{ cardDetail.Size.Currency }</span><span className="card-detail-information-price-amount">{ cardDetail.Size.Price }</span></div>
                <div className="card-detail-information-button-buy"><button>Personalise &amp; Send</button></div>
              </div>
            </div>
          </Fragment>
          ,
          document.getElementById('CardDetail')
        );

      }
      .bind(this))
      .catch(function (error) {
        if (error.response) {    
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx


        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            


        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
      })
      .then(function () {
          // always executed
          
      
      });
  
  }

  render() {
    return (
      <Fragment>
        <div id="CardGrid" className="card-grid">
          {this.state.cards.map((card, index) =>
            <div className="card-item-container" key={index + '-' + card.MoonpigProductNo}>
              <div className="card-item">
                <div className="card-item-image-container">
                  <a href="/" onClick={(e) => this.cardDetail(card.MoonpigProductNo, e)} data-cardid={card.MoonpigProductNo}>
                    <img src={card.ProductImage.Link.Href} alt={card.Title} />
                  </a>
                </div>
                <ReviewStars reviewRating={card.Reviews.AverageStarReviewRating} reviewCount={card.Reviews.ReviewCount} />             
              </div>
            </div>
          )}
        </div>
        <div id="CardDetailModal" className="card-detail-modal">
          <div id="CardDetail" className="card-detail-container" />
        </div>
      </Fragment>
    )
  }
}

export default CardGrid
