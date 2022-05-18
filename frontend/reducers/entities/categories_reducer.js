import { RECEIVE_CATEGORIES } from "../../actions/listings_actions" 

const categoriesReducer = (oldState={}, action)=>{
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)
  switch(action.type){
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return oldState;
  }
}

export default categoriesReducer;