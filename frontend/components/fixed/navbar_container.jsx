import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
import { fetchAllCartItems } from "../../actions/cart_actions";

const mSTP = state => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id],
  cartItems: state.entities.cartItems
})

const mDTP = dispatch => ({
  logout: ()=> dispatch(logout()),
  fetchSearchProducts: (searchTerm)=> dispatch(fetchSearchProducts(searchTerm)),
  fetchAllCartItems: (shopperId)=> dispatch(fetchAllCartItems(shopperId)),
})

export default withRouter(connect(mSTP,mDTP)(NavBar))