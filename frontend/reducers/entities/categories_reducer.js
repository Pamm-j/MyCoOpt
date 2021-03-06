import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY_PRODUCTS } from "../../actions/listings_actions" 

const categoriesReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch(action.type){
    case RECEIVE_CATEGORIES:
      return action.categories;
    // case RECEIVE_CATEGORY_PRODUCTS:
    //   newState[action.category.id] = action.category
    //   return newState
    default:
      return oldState;
  }
}

export default categoriesReducer;