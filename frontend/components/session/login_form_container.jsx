import {connect} from 'react-redux';
import React from 'react'
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';


const mSTP = state => ({
  errors: state.errors,
  user: {email:'', password:''}
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(mSTP,mDTP)(LoginForm)
