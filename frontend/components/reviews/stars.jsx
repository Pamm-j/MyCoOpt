import React from "react";
import { Link } from "react-router-dom";

const Stars = (props) => {
  const ratingArr = [1,2,3,4,5]
  return (
    
    <div>
      {ratingArr.map ((i)=>(
        props.rating > i - 1 ? 
          <span key={i +"star"} className="star-yellow">★</span>:
          <span key={i +"star"} className="star-grey">★</span>
        ))}
        <span id="small-text"> ({props.amount})</span>
    </div>
  )
}

export default Stars; 