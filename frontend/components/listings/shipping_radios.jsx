import React from 'react'

export default function ShippingRadios(props) {
  const product = props.product

  return (
    <div>
      <div className="in-line radios">
        <input
          type="radio"
          id={product.id +"pickup"}
          name={"shipping" + product.id + product.color + product.size}
          style={{ accentColor: "#4e4d49" }}
          value="pickup"
          checked={props.delivery_type === "pickup" ? "checked" : "" }
          onChange={props.handleClick('delivery_type', "pickup")}
        />
        <label id={product.id+"pickup"}>Pick up at store--FREE</label>
      </div>
      <div className="in-line radios">              
        <input
          type="radio"
          id={product.id+"delivery"}
          name={"shipping" + product.id + product.color + product.size}
          style={{ accentColor: "#4e4d49" }}
          value="delivery"
          checked={props.delivery_type === "delivery" ? "checked" : "" }
          onChange={props.handleClick('delivery_type', "delivery")}
        />
        <label id={product.id+"delivery"}>Ship to Address</label>
      </div>
    </div>
  )
}
// ToImplement use snippet below
{/* <ShippingRadios
delivery_type={this.state.cartItem.delivery_type}
handleClick={this.handleClick}
product={product}
/> */}