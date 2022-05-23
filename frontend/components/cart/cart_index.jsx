import React from "react";
import { Link } from "react-router-dom";
import CartIndexItem from "./cart_index_item";

import { AiFillQuestionCircle, AiOutlineTag} from 'react-icons/ai';
import { GiSwordsEmblem } from 'react-icons/gi';
import { BsBoxSeam } from 'react-icons/bs';

class CartIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAllCartItems(this.props.shopperId)
  }
  getKey(){
    const orderNum = Math.floor(Math.random() * 10000000)
    return orderNum
  }
  render(){
    
    const items = this.props.cartItems
    const totalArray = items.map(item=>item.price*item.quantity)
    const total = totalArray.reduce((partialSum, a) => partialSum + a, 0)
    return (
      <div className="webpage cart-outer-container">
        <div className="cart-title">
          <h1>Your Shopping Cart<span>({items.length} items)</span></h1>
          
        </div>
        <div className="cart-inner-container">

          <div className="cart-left ">
            <div className="cart-item-grid round-box">
              <div className="cart-left-subheading in-line">
                <p className="cart-index-photo cart-left-subheading">Items</p>
                <div className="update-container-top-clone in-line ">
                  <p>Quantity</p>
                  <p>Item Price</p>
                  <p>Total</p>
                </div>
              </div>
              {items.map((item)=> (<CartIndexItem 
                    key={this.getKey()} 
                    item={item}
                    deleteCartItem={this.props.deleteCartItem}
                    updateCartItem={this.props.updateCartItem}
                    fetchAllCartItems={this.props.fetchAllCartItems}
                    shopperId={this.props.shopperId}
                    />))}

            </div>
            <h1>Recently Viewed</h1>
            <div className="recently-viewed">
              <div></div>
              <div></div>
            </div>      
          </div>

          <div className="cart-right">
            <div className="round-box">

            <h1 className="cart-right-subheading">Order Summary</h1>
            <div className="order-summary-grid">
              <div className="in-line cart-right-summary">
                <h2>Subtotal</h2>
                <h2>${parseFloat(total).toFixed(2)}</h2>
              </div>
              <div className="in-line cart-right-summary">
                <h3>Standart Shipping</h3>
                <h3>FREE</h3>
              </div>
              <div className="in-line cart-right-summary">
                <h3>Estimated taxes <AiFillQuestionCircle/></h3>
                <h3>--</h3>
              </div>
              <div className="in-line cart-right-summary">
                <h2>Order total</h2>
                <h2>${parseFloat(total).toFixed(2)}</h2>
              </div>
            </div>
              
            </div>
            <div className="message">
              <GiSwordsEmblem className="sword"/>
              <p> Take my sword and shield and listen. For <span> ${parseFloat(total*0.1).toFixed(2)} </span> 
               you can focus the power in the blade (hold the <span>B</span>) button. </p>
            </div>
            <div className="message">
              <BsBoxSeam className="sword"/>
              <p> You earned free standard shipping! Thanks for being a My Co-opt Member. <a 
              className="lnk" href="/#/learnmore">Learn more</a>
              </p>
            </div>
            <div className="message">
              <AiOutlineTag className="sword"/>
              <p> Unfortunatly, we don't do coupons at My Co-opt. Thanks for shopping!
              </p>
            </div>
            <a href="/#/checkout" className="grn btn center">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CartIndex; 
 