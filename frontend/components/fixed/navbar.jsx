import React from "react";
import { Link } from "react-router-dom";
import Greeting from "../greeting/greeting_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";

const NavBar = () => {
  return (
    <div>
    <div className="header">
      <div className="inner-header">
        <div className="inner-header-left">
          <img className="logo" src={window.logo} />
          <Link className='shop-btn' to='/underconstruction'>Shop</Link>
        </div>
        <div className="inner-header-right">
          <Link className='stores-btn' to='/underconstruction'>Stores</Link>
          {/* < ProtectedRoute className='greet' component={Greeting}/> */}
          <Link className='cart-btn' to='/underconstruction'>Cart</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar; 