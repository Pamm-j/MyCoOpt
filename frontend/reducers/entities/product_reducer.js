import { RECEIVE_CATEGORY_PRODUCTS } from "../../actions/listings_actions" 

const productReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_CATEGORY_PRODUCTS:
      return action.products
    default:
      return {};
  } 
}

export default productReducer; 