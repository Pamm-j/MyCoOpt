import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/listings_actions";
import { createCartItem } from "../../actions/cart_actions";
import { fetchAllReviews, updateReview, createReview, deleteReview } from "../../actions/review_actions"
import { fetchSearchProducts } from "../../actions/listings_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  reviews: Object.values(state.entities.reviews),
  currentUserId: state.session.id,
  cartItem: {
    quantity: 1,
    product_id: "",
    shopper_id: state.session.id,
    size: '',
    color: '',
    delivery_type: 'delivery'
  },
  review: {
    reviewer_id:state.session.id, 
    product_id:ownProps.match.params.id, 
    title:"", 
    body:"", 
    rating:0
  }
  
})
const mDTP = (dispatch) => ({
  fetchProduct: (productId)=> dispatch(fetchProduct(productId)),
  createCartItem: (product)=> dispatch(createCartItem(product)),
  fetchAllReviews: (productId)=> dispatch(fetchAllReviews(productId)),
  updateReview: (review)=> dispatch(updateReview(review)),
  createReview: (review)=> dispatch(createReview(review)),
  deleteReview: (reviewId)=> dispatch(deleteReview(reviewId)),
  fetchSearchProducts: (term)=> dispatch(fetchSearchProducts(term)),
})

export default withRouter(connect(mSTP, mDTP)(ProductShow))