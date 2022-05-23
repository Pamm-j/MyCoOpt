export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'

import * as CartAPIUtil from '../util/cart_api_util'

const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
})
const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
})
const removeCartItems = (shopperId) => ({
  type: REMOVE_CART_ITEMS,
  shopperId
})

export const fetchAllCartItems = (shopperId) => dispatch => CartAPIUtil.fetchAllCartItems(shopperId)
.then((cartItems)=>(dispatch(receiveCartItems(cartItems))))

export const fetchCartItem = (cartItemId) => dispatch => CartAPIUtil.fetchCartItem(cartItemId)
  .then((cartItem)=>(dispatch(receiveCartItem(cartItem))))

export const createCartItem = (cartItem) => dispatch => CartAPIUtil.createCartItem(cartItem)
  .then((cartItem)=>(dispatch(receiveCartItem(cartItem))))

export const updateCartItem = (cartItem) => dispatch => CartAPIUtil.updateCartItem(cartItem)
  .then((cartItem)=>(dispatch(receiveCartItem(cartItem))))

export const deleteCartItems = (shopperId) => dispatch => CartAPIUtil.deleteCartItems(shopperId)
  .then(()=>(dispatch(removeCartItems(shopperId))))