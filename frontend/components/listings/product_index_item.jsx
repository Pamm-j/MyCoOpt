import React from "react";
import { Link } from "react-router-dom";


const ProductIndexItem = (props) => {
  console.log(props.product.colors)
  return (
    <div className="product-index-item-container">
      <img src={props.product.photoUrls[0]} alt="" />
      <ul className="color-list" >
        {props.product.colors.map((color)=>(<li >{color}</li> ))}
      </ul>
      <div className="product-name">{props.product.name}</div>
      <div className="price"></div>
      <div className="rating-stars"></div>
    </div>
  )
}

export default ProductIndexItem;