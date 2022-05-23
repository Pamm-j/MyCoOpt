import React from "react";
import { Link } from "react-router-dom";
import Colors from "../../util/colors";
import ColorSwatch from "./color_swatch";


class ProductIndexItem extends React.Component {
  constructor(props){
    super(props)
  }
  

  render(){
    const product = this.props.product
    return (
      <div className="product-index-item-container">
        <Link to={`/product/${product.id}`}>

        <div className="photo-box"><img src={product.photoUrls[0]} alt="" /></div>
        </Link>
        
        <ul className="color-list" >
          {product.colors.map((color)=>(
          <li 
            className="round-box color-btn" 
            key={"color" + color}
            style={{backgroundColor: `${Colors[color]}`}}></li> 
          ))}
        </ul>
        <div className="product-name">
          <Link to={`/product/${product.id}`}>
            <p>{product.brand}</p>
            <p>{product.name}</p>
          </Link>
  
        </div>
        <div className="price">${product.price}</div>
        <div className="rating-stars">
          <span>★★★★★</span>
          <span> (4,592)</span>
          </div>
      </div>
    )
  }
}


export default ProductIndexItem; 

