import { connect } from "react-redux";
import React from "react";
import CartIndex from "./cart_index";
import { fetchAllCartItems, deleteCartItems, updateCartItem, deleteCartItem } from '../../actions/cart_actions'
import CheckoutIndex from "./checkout_index";


const mSTP = (state) => {
  return({
  cartItems: Object.values(state.entities.cartItems),
  shopperId: state.session.id,
  shopper: state.entities.users[state.session.id]
})}

const mDTP = dispatch => ({
  fetchAllCartItems: (shopperId)=> dispatch(fetchAllCartItems(shopperId)),
  deleteCartItems: (shopperId)=> dispatch(deleteCartItems(shopperId)),
  deleteCartItem: (cartItemId)=> dispatch(deleteCartItem(cartItemId)),
  updateCartItem: (item)=> dispatch(updateCartItem(item))
})

export const CartIndexContainer = connect(mSTP,mDTP)(CartIndex)  
export const CheckoutIndexContainer = connect(mSTP,mDTP)(CheckoutIndex)  