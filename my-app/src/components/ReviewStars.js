import React, { Component } from 'react';

import '../css/ReviewStars.css';

class ReviewStars extends Component {

    render() {
        return (
            <div className="ReviewStars card-item-reviews">
                <span className="card-item-reviews-stars">{this.props.reviewRating}</span> <span className="card-item-reviews-count">({this.props.reviewCount})</span>
            </div>
        )
    }
}

export default ReviewStars