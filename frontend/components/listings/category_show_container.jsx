import { connect } from "react-redux";
import React from "react";
import { fetchCategories, fetchCategoryProducts } from "../../actions/listings_actions";
import CategoryShow from "./category_show";


const mSTP = (state, ownProps) => ({
  category: state.entities.categories[ownProps.match.params.id],
  products: Object.values(state.entities.products)
})
const mDTP = (dispatch) => ({
  action: (categoryId)=> dispatch(fetchCategoryProducts(categoryId)),
})

export const CategoryShowContainer = connect(mSTP, mDTP)(CategoryShow)