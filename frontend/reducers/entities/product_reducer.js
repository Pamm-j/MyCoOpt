import { RECEIVE_CATEGORY_PRODUCTS, RECEIVE_PRODUCT } from "../../actions/listings_actions" 

const productReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_CATEGORY_PRODUCTS:
      return action.products
    case RECEIVE_PRODUCT:
      newState[action.product.id] = action.product
      return newState
    default:
      return newState;
  } 
}

export default productReducer; 