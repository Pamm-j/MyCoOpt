import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/listings_actions";
import { createCartItem } from "../../util/cart_api_util";



const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  cartItem: {
    quantity: 1,
    product_id: 1,
    shopper_id: state.session.id,
    size: '',
    color: '',
    delivery_type: 'delivery'
  }
})
const mDTP = (dispatch) => ({
  fetchProduct: (productId)=> dispatch(fetchProduct(productId)),
  createCartItem: (product)=> dispatch(createCartItem(product)),
})

export default connect(mSTP, mDTP)(ProductShow)