export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
import * as SessionApiUtil from '../util/session_api_util'

const recieveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})
export const recieveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})
export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const login = (user) => dispatch => SessionApiUtil.login(user)
  .then((user)=>(dispatch(recieveCurrentUser(user))), errors =>(dispatch(recieveErrors(errors.responseJSON))))

export const signup = (user) => dispatch => SessionApiUtil.signup(user)
  .then((user)=>(dispatch(recieveCurrentUser(user))), errors =>(dispatch(recieveErrors(errors.responseJSON))))
  
export const logout = () => dispatch => SessionApiUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))