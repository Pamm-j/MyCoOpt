import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEMS } from "../../actions/cart_actions" 

const cartItemReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.cart_item_id] = action.cartItem
      return newState
    case REMOVE_CART_ITEMS:
      Object.values(newState).forEach((cartItem)=>{
        if (cartItem.shopper_id === action.shopperId) {
          delete newState[cartItem.cart_item_id]
        }
      })

      return newState
    default:
      return oldState;
  }
}

export default cartItemReducer;