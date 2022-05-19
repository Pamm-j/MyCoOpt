import { connect } from "react-redux";
import React from "react";
import ProductShow from "./product_show";



const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
})
const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(ProductShow)