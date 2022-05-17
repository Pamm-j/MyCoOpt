import React from "react";
import { Link } from "react-router-dom";

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
          <Link className='cart-btn' to='/underconstruction'>Cart</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar; 