import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from "../../actions/cart_actions" 

const cartItemReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.id] = action.cartItem
      return newState
    case REMOVE_CART_ITEM:
      delete newState[action.cartItemId]
      return newState
    default:
      return oldState;
  }
}

export default cartItemReducer;