import { combineReducers } from "redux"
import usersReducer from "./entities/users_reducer"
import categoriesReducer from "./entities/categories_reducer"
import productReducer from "./entities/product_reducer"
import cartItemReducer from "./entities/cart_items_reducer"
import reviewsReducer from "./entities/reviews_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  products: productReducer,
  cartItems: cartItemReducer,
  reviews: reviewsReducer
})

export default entitiesReducer