import { combineReducers } from "redux"
import usersReducer from "./entities/users_reducer"
import categoriesReducer from "./entities/categories_reducer"
import productReducer from "./entities/product_reducer"


const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  products: productReducer
})

export default entitiesReducer