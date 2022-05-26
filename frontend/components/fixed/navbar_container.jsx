import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
// import { fetchSearchProducts } from "../../util/listings_api_util";

const mSTP = state => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
  logout: ()=> dispatch(logout()),
  fetchSearchProducts: (searchTerm)=> dispatch(fetchSearchProducts(searchTerm)),
})

export default withRouter(connect(mSTP,mDTP)(NavBar))