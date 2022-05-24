import React from "react";
// import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'

import { Link } from "react-router-dom";



class ReviewItem extends React.Component{
  render(){
    const review = this.props.review
    const splitAddress = review.location.split(' ')
    return (
      <div className="review-item-container">
        <div className="left-column">
          <div className="reviewer-name">{review.reviewer_name}</div>
          <div className="address">{splitAddress.slice(0,2).join(" ")}</div>
        </div>
        <div className="right-column"></div>
      </div>
    )
  }
}

export default ReviewItem;
 