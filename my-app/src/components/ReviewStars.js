import React, { Component } from 'react';

import '../css/ReviewStars.scss';

class ReviewStars extends Component {

    setRatingWidth(r){
        const rating = r;
        var width = 0;
        
        // work out the percentage for the css width
        width = (rating/5)*100;

        return width + '%';
    }
    
    render() {
        return (
            <div className="ReviewStars card-item-reviews">
                <div className="card-item-reviews-stars">
                    <div className="card-item-reviews-stars-top" style={{width: this.setRatingWidth(this.props.reviewRating)}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="card-item-reviews-stars-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
                <span className="card-item-reviews-count">({this.props.reviewCount})</span>
            </div>
        )
    }
}

export default ReviewStars