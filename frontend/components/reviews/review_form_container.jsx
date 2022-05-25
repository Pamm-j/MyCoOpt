import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/listings_actions";
import { createCartItem } from "../../actions/cart_actions";
import { fetchAllReviews, updateReview, createReview } from "../../actions/review_actions"



const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  reviews: Object.values(state.entities.reviews),
  review: {
    reviewer_id:1, 
    product_id:1, 
    title:"", 
    body:"", 
    rating:0
  }
})
const mDTP = (dispatch) => ({
  updateReview: (review)=> dispatch(updateReview(review)),
  createReview: (review)=> dispatch(createReview(review)),
})

export default connect(mSTP, mDTP)(ProductShow)