import React from "react";
import { Link } from "react-router-dom";


const CatSplash = (props) => {
  return (
    <div>

      <div className="cat-splash" style={{ 
        backgroundImage: `url("${props.category.photoUrl}")` 
      }}><span>{props.category.title}</span></div>
      <div className="webpage">

      <h2 className="cat-description">{props.category.description}</h2>
      </div>
    </div>
  )
}

export default CatSplash;