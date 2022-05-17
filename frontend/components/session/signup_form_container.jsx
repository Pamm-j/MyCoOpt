import {connect} from 'react-redux';
import React from 'react'
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';


const mSTP = state => ({
  errors: state.errors,
  user: {
    f_name: '',
    m_initial: '',
    l_name: '',
    email: '',
    password: '',
    confirm_password: '',
    full_name: ''
  }
})
 
const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(mSTP,mDTP)(SignupForm)
