import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/listings_actions";
import { createCartItem } from "../../actions/cart_actions";
import { fetchAllReviews, updateReview, createReview } from "../../actions/review_actions"



const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  reviews: Object.values(state.entities.reviews),
  cartItem: {
    quantity: 1,
    product_id: "",
    shopper_id: state.session.id,
    size: '',
    color: '',
    delivery_type: 'delivery',
    image_view: 0
  }
})
const mDTP = (dispatch) => ({
  fetchProduct: (productId)=> dispatch(fetchProduct(productId)),
  createCartItem: (product)=> dispatch(createCartItem(product)),
  fetchAllReviews: (productId)=> dispatch(fetchAllReviews(productId)),
  updateReview: (review)=> dispatch(updateReview(review)),
  createReview: (review)=> dispatch(createReview(review)),
})

export default connect(mSTP, mDTP)(ProductShow)