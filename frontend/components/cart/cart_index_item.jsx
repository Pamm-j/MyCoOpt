import React from "react";
import { Link } from "react-router-dom";
import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'
import Constants from "../../util/constants";
import ShippingRadios from "../listings/shipping_radios";

class CartIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = props.item
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidUpdate(prevProps){
    if((prevProps.item && this.props.item.quantity !== prevProps.item.quantity)
     ||(prevProps.item && this.props.item.delivery_type !== prevProps.item.delivery_type)){
      this.props.fetchAllCartItems(this.props.shopperId)
    }
  }

  increment = (num)=> () => {
    let newQuantity = JSON.parse(this.props.item.quantity) + num
    if (newQuantity < 1) newQuantity = 0
    this.props.updateCartItem({id:this.props.item.cart_item_id, quantity:newQuantity})
  } 

  handleClick = (_, type)=>()=> {
    this.props.updateCartItem({id:this.props.item.cart_item_id, delivery_type:type})
  }
  removeItem(id){
    this.props.deleteCartItem(id)
  }

  render(){
    let item = this.props.item
    return(
      <div className="cart-index-item">
        <div className="cart-index-photo"><img src={item.photoUrls[0]} /></div>
        
        <div className="cart-index-item-details">
          <h3>{item.brand}</h3>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
          <p>Color: {item.color}</p>
          <p>Size: {item.size}</p>
          <p>Item: {item.id*Constants.item_key}</p>
          <button onClick={()=>this.removeItem(item.cart_item_id)}>Remove</button>
        </div>
  
        <div className="update-container">
          <div className="update-container-top">
            <div className="amount-ticker">
              <button className="increment-button" onClick={this.increment(-1)}  ><BsDashCircle/></button>             
              <input readOnly="readonly" 
              className="quantity-input" 
              type="number" 
              inputMode="numeric" 
              max="9999" 
              min="1" value={this.props.item.quantity} />
              <button className="increment-button" onClick={this.increment(1)} ><BsPlusCircle/></button>
            </div>
            <div className="price">${parseFloat(item.price).toFixed(2)}</div>
            <div className="total">${parseFloat(item.price  * item.quantity).toFixed(2)}</div>
          </div>
          <ShippingRadios
            delivery_type={item.delivery_type}
            handleClick={this.handleClick}
            product={item}
          />
        </div>
  
      </div>
    )
  }
  }

export default CartIndexItem; 