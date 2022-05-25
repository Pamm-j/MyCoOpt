import React from "react";
// import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'

import { Link } from "react-router-dom";



class ReviewItem extends React.Component{
  render(){
    const ratingArr = [1,2,3,4,5]
    const review = this.props.review
    const splitAddress = review.location.split(' ')
    return (
      <div className="review-item-container">
        <div className="left-column">
          <div className="reviewer-name">{review.reviewer_name}</div>
          <div className="address">{splitAddress.slice(0,2).join(" ")}</div>
          {this.props.currentUserId === review.reviewer_id &&
          <div onClick={()=>this.props.deleteReview(review.id)} className="red-lnk small">Remove</div>}
          {this.props.currentUserId === review.reviewer_id &&
          <div onClick={()=>this.props.handleUpdate(review)} id="green" className="grn-lnk small">Update</div>}
        </div>
        <div className="right-column">
          {ratingArr.map ((i)=>(
            this.props.review.rating > i - 1 ? 
              <span key={i +"star"} className="star-yellow">★</span>:
              <span key={i +"star"} className="star-grey">★</span>
            ))}
          <div className="title">{review.title}</div>
          <div className="body">{review.body}</div>
        </div>
      </div>
    )
  }
}

export default ReviewItem;