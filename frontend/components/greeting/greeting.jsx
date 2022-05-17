import React from "react";
import { Link } from "react-router-dom";

const greeting = (props) => {
  const split_name = props.currentUser.full_name.split(' ')
  return (
    <div>
      <span> Hi, {`${split_name[0]}`} </span>
      <Link className='btn grn' onClick={props.logout} to={'/login'}>Logout!</Link>
    </div>
  )
}

export default greeting; 

// const Greeting = (props) => {
//   console.log(props)
//   const split_name = props.currentUser.full_name.split(' ')
//   return (
//     <div>
//       <h1>hi{`${split_name[0]}`}!</h1>
//       <Link className='btn grn' onClick={props.logout} to={'/login'}>Logout!</Link>
//     </div>
//   )
// }

// export default Greeting; 