import {connect} from 'react-redux';
import React from 'react'
import LoginForm from './login_form';
import { clearErrors, login } from '../../actions/session_actions';


const mSTP = state => ({
  errors: state.errors,
  user: {email:'', password:''}
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: ()=> dispatch(clearErrors())
})

export default connect(mSTP,mDTP)(LoginForm)
