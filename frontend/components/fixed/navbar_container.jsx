import React from "react";
import { connect } from "react-redux";
import { Route, withRouter, Redirect} from 'react-router-dom'
import NavBar from "./navbar";


const mSTP = state => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
  logout: ()=> dispatch(logout())
})

export default connect(mSTP,mDTP)(NavBar)