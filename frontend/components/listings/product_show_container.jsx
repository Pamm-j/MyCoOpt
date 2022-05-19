import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/listings_actions";



const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
})
const mDTP = (dispatch) => ({
  fetchProduct: (productId)=> dispatch(fetchProduct(productId))
})

export default connect(mSTP, mDTP)(ProductShow)