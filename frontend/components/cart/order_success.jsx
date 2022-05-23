import React from "react";
import { AiFillQuestionCircle} from 'react-icons/ai';

class OrderSuccess extends React.Component{
  render(){
    const orderNum = Math.floor(Math.random() * 10000000)
    // let temp = this.props
    let temp = {
      first_name:"Bobby",
      tax:27,
      total:1000,
      card_end:"5555",
    }
    return (
    <div className="order-sum-webpage">
      <div className="order-summary-container"> 
        <div className="big-title">Thank you, {temp.first_name}!</div>
        <div className="little-title">Your order has been received. You'll get a confirmation email shortly.</div>
        <div className="little-title">Order number <span>A{orderNum}</span></div>
        <div className="round-box">
          <h1 className="cart-right-subheading">Order Summary</h1>
          <div className="order-summary-grid">
            <div className="in-line cart-right-summary">
              <h2>Subtotal</h2>
              <h2>${parseFloat(temp.total).toFixed(2)}</h2>
            </div>
            <div className="in-line cart-right-summary">
              <h3>Standart Shipping</h3>
              <h3>FREE</h3>
            </div>
            <div className="in-line cart-right-summary">
              <h3>Estimated taxes <AiFillQuestionCircle/></h3>
              <h3>${parseFloat(temp.tax).toFixed(2)}</h3>
            </div>
            <div className="in-line cart-right-summary">
              <h2>Order total</h2>
              <h2>${parseFloat(temp.tax + temp.total).toFixed(2)}</h2>
            </div>
            <div className="in-line cart-right-summary">
              <h2>Visa (ending in {temp.card_end})</h2>
              <h2>${parseFloat(temp.tax + temp.total).toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default OrderSuccess; 
 