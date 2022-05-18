import { connect } from "react-redux";
import React from "react";
import { fetchCategories } from "../../actions/listings_actions";
import CategoryIndex from "./category_index";

const mSTP = (state) => ({
  categories: Object.values(state.entities.categories)
})
const mDTP = (dispatch) => ({
  fetchCategories: ()=> dispatch(fetchCategories())
})

export default connect(mSTP, mDTP)(CategoryIndex)