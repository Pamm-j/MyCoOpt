import React from "react";

class ProductShow extends React.Component{
  componentDidUpdate(prevProps){
    if (!prevProps) {
      this.props.fetchProduct( this.props.match.params.id )
    }
  }

  componentDidMount(){
    this.props.fetchProduct( this.props.match.params.id )
  }
  render(){
    const product = this.props.product
    // console.log(product.details)
    if (!product){
      return null 
      } else return (
        <div className="product-show-page">
          <div className="show-top-boxes">
            <div className="show-photo"><img src={product.photoUrls[0]} /></div>
            <div className="purchase-details">
              <h1>{product.brand} {product.name}</h1>
                <div className="flex-line rating-stars">
                  <div>
                    <span>★★★★★ |</span>
                    <span> (4,592)</span>
                  </div>
                <span> Item #{product.id}</span>
                </div>
              <div></div>
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
              <span>quantity<input type="text" className="white-input"/></span>
            </div>
          </div>
          <div className="show-details">{product.description}</div>
          <div className="Reviews"></div>


        </div>
      )
  }
}

export default ProductShow;
 