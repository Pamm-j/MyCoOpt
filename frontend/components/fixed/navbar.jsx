import React from "react";
import { Link } from "react-router-dom";
import CategoryIndexContainer from "../listings/category_index_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";

const NavBar = (props) => {
  let menu;
  if (props.loggedIn) {
    const split_name = props.currentUser.full_name.split(' ')
    menu =  <span className='stores-btn'> Hi, {`${split_name[0]}`} <Link className='stores-btn' onClick={props.logout} to={'/login'}>Logout</Link></span>
  } else {
    menu = <Link className='stores-btn' to='/login'>Sign In</Link>
  } 
  return (
    <div>
    <div className="header">
      <div className="inner-header">
        <div className="inner-header-left">
          <a href="/"><img className="logo" src={window.logo} /></a>
          
          <Link className='shop-btn' to='/'>Shop</Link>
        </div>
        <div className="inner-header-right">
          <Link className='stores-btn' to='/underconstruction'>Stores</Link>
          {menu}          
          <Link className='cart-btn' to='/underconstruction'>Cart</Link>
        </div>
      </div>
      <CategoryIndexContainer/>
    </div>
    </div>
  )
}

export default NavBar; 