import { connect } from "react-redux";
import React from "react";
import Splash from "./spash";


const mSTP = state => ({
  cycle: Object.values(state.entities.categories)
})

const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(Splash)