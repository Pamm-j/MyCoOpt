import { connect } from "react-redux";
import React from "react";
import { fetchSearchProducts} from "../../actions/listings_actions";
import CategoryShow from "./category_show";


const mSTP = (state, ownProps) => ({
  products: Object.values(state.entities.products),
  searchTerm: ownProps.match.params.searchTerm
})
const mDTP = (dispatch) => ({
  action: (value)=> dispatch(fetchSearchProducts(value)),
})

export const SearchShowContainer = connect(mSTP, mDTP)(CategoryShow)