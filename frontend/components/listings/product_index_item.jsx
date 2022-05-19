import React from "react";
import { Link } from "react-router-dom";


const ProductIndexItem = (props) => {
  return (
    <div className="product-index-item-container">
      <div className="photo-box"><img src={props.product.photoUrls[0]} alt="" /></div>
      
      <ul className="color-list" >
        {props.product.colors.map((color)=>(<li className="sml-btn" key={"color" + color} >{color}</li> ))}
      </ul>
      <div className="product-name">
        <Link to={`/product/${props.product.id}`}>
          <p>{props.product.brand}</p>
          <p>{props.product.name}</p>
        </Link>

      </div>
      <div className="price">${props.product.price}</div>
      <div className="rating-stars">
        <span>★★★★★</span>
        <span> (4,592)</span>
        </div>
    </div>
  )
}

export default ProductIndexItem; 