import React from "react";
import { Link } from "react-router-dom";
import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'

class CartIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = props.item
  }
  componentDidUpdate(prevProps){
    if((prevProps.item && this.props.item.quantity !== prevProps.item.quantity)
     ||(prevProps.item && this.props.item.delivery_type !== prevProps.item.delivery_type)){
      this.props.fetchAllCartItems(this.props.shopperId)
    }
  }
  // componentDidMount(){
  //   this.handleType(this.props.item.delivery_type)
  // }

  increment = (num)=> () => {
    let newQuantity = JSON.parse(this.props.item.quantity) + num
    if (newQuantity < 1) newQuantity = 0
    this.props.updateCartItem({id:this.props.item.cart_item_id, quantity:newQuantity})
      // .then(this.props.fetchAllCartItems(this.props.shopperId))
  } 
  // handleChange = (type)=>(e)=> {
  //   let newQuantity = JSON.parse(this.props.item.quantity) + num
  //   if (newQuantity < 1) newQuantity = 0
  //   this.setState({quantity: e.target.value})
  //   this.props.updateCartItem({id:this.props.item.id, quantity:newQuantity})
  // }

  handleClick(type) {
    this.props.updateCartItem({id:this.props.item.cart_item_id, delivery_type:type})
    // this.handleType(type)
  }
  // handleType(type){
  //   if (type === 'delivery') {
  //     this.check('delivery')
  //     this.uncheck('pickup')
  //   } else {
  //     this.uncheck('delivery')
  //     this.check('pickup')
  //   }
  // }
  // check(type) {
  //   document.getElementById(this.props.item.id+type).checked = true;
  // }
  // uncheck(type) {
  //   document.getElementById(this.props.item.id+type).checked = false;
  // }

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
          <p>Item: {item.id*56879}</p>
          <button onClick={()=>this.props.deleteCartItem(item.cart_item_id)}>Remove</button>
        </div>
  
        <div className="update-container">
          <div className="update-container-top">
            <div className="amount-ticker">
              <button className="increment-button" onClick={this.increment(-1)}  ><BsDashCircle/></button>             
              <input readOnly="readonly" className="quantity-input" type="number" inputMode="numeric" max="9999" min="1" value={this.props.item.quantity} />
              <button className="increment-button" onClick={this.increment(1)} ><BsPlusCircle/></button>
            </div>
            <div className="price">${parseFloat(item.price).toFixed(2)}</div>
            <div className="total">${parseFloat(item.price  * item.quantity).toFixed(2)}</div>
          </div>
          <div className="in-line">
            <input type="radio" id={item.id+"pickup"} name={item.quantity} 
              style={{ accentColor: "#4e4d49" }}
              value="pickup"
              onClick={()=>this.handleClick('pickup')}/>
            <label id={item.id+"pickup"}>Pick up at store--FREE</label>
          </div>
          <div className="in-line">              
            <input type="radio" id={item.id+"delivery"} name={item.quantity}
              style={{ accentColor: "#4e4d49" }}
              value="delivery"
              onClick={()=>this.handleClick('delivery')}/>
            <label id={item.id+"delivery"}>Ship to Address</label>
          </div>
        </div>
  
      </div>
    )
  }
  }

export default CartIndexItem; 