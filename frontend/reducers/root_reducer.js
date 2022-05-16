import { combineReducers } from "redux"
import entitiesReducer from "./entities_reducer"
import errors_reducer from "./errors_reducer"
import sessionReducer from "./session_reducer"

export default combineReducers({
  entities: entitiesReducer,
  errors: errors_reducer,
  session: sessionReducer
})
