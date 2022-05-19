import React from "react";

class ProductShow extends React.Component{
  componentDidUpdate(prevProps){

  }

  componentDidMount(){
  }
  render(){
    const product = this.props.product
    console.log(product.details)
    return (
      <div className="product-show-containter">
        <div className="show-top-boxes">
          <div className="show-photo"><img src={product.photoUrls[0]} /></div>
          <div className="purchase-details">
            <h1>{product.brand} {product.name}</h1>
            <div className="flex-line rating-stars">
              <span>★★★★★</span>
              <span> (4,592)</span>
              <span> Item #{product.id}</span>
            </div>
            <div className="price">${product.price}</div>
            <ul className="color-list" >
                {product.sizes.map((size)=>(<li 
                className="sml-btn" 
                key={"size" + size}>{size}</li> ))}
            </ul>
            <ul className="color-list" >
                {product.colors.map((color)=>(<li 
                className="sml-btn" 
                key={"color" + color}>{color}</li> ))}
            </ul>
            <input type="text" value='quantity' className="white-input"/>
          </div>
        </div>
        <div className="show-details">{product.description}</div>
        <div className="Reviews"></div>


      </div>
    )
  }
}

export default ProductShow;
