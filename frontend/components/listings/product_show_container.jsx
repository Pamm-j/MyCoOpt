import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/listings_actions";
import { createCartItem } from "../../actions/cart_actions";



const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  category:1,
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
})

export default connect(mSTP, mDTP)(ProductShow)