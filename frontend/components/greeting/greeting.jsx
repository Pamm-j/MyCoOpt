import React from "react";
import { Link } from "react-router-dom";

const greeting = (props) => {
  return (
    <div>
      <h1>hi there {`${props.currentUser.full_name}`}!</h1>
      <Link className='btn grn' onClick={props.logout} to={'/login'}>Logout!</Link>
    </div>
  )
}

export default greeting; 