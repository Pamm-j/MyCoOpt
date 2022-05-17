import React from "react";
import { Link } from "react-router-dom";
import Greeting from "../greeting/greeting_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";

const NavBar = (props) => {
  const split_name = props.currentUser.full_name.split(' ')
  let menu;
  if (props.logedI) {
    menu = <Link className='stores-btn' to='/login'>Sign In</Link>
  } else {
    menu =  <span className='stores-btn'> Hi, {`${split_name[0]}`} <Link className='stores-btn' onClick={props.logout} to={'/login'}>Logout</Link></span>
    
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
    </div>
    </div>
  )
}

export default NavBar; 