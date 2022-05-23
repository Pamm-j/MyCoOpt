import React from "react";
import CheckoutIndexItem from "./checkout_index_item";
import { AiFillQuestionCircle} from 'react-icons/ai';
import { FaInfoCircle, FaCcPaypal} from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { SiVisa } from 'react-icons/si';
import {Redirect} from 'react-router-dom'


class CheckoutIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {securityCode:""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = ()=>(e)=> this.setState({securityCode: e.target.value})

  componentDidMount(){
    this.props.fetchAllCartItems(this.props.shopperId)
  }

  // componentDidUpdate(){
  //   if (!this.props.cartItems){
  //     <Redirect to='/order_confirmation'/>
  //   }
  // }

  handleSubmit(){
    this.props.cartItems.map((item)=>this.props.deleteCartItem(item.id))
    // .then(()=>this.props.history.push('/order_confirmation'))
  }
  render(){
    const items = this.props.cartItems
    const shopper = this.props.shopper
    const shipped_items = items.filter((item) =>( item.delivery_type === "delivery")).length;
    const totalArray = items.map(item=>item.price*item.quantity)
    const total = totalArray.reduce((partialSum, a) => partialSum + a, 0)
    const tax = total *0.115
    return (
      <div className="narrow-webpage checkout-index">
        <h1 className="centered-title">Review and Pay</h1>
        <p>Please review the following information for accuracy.</p>
        <div className="summary-container">
          <div className="checkout-left">
            <h2 className="checkout-left-h2">REI Co-op Membership</h2>
            <h3>{shopper.full_name}</h3>
            <h3>#{shopper.id*458581}</h3>
            <div className="in-line-space-between">
              <h2>Contact information</h2>
              <a className="lnk" href="/#/under_construction"> Edit Contact</a>
            </div>
            <h3>{shopper.email}</h3>
            <div className="in-line-space-between">
              <h2 className="close">Shipping address</h2>
              <a className="lnk" href="/#/under_construction"> Edit Shipping</a>
            </div>
            <p className="small-with-gap">Shipping {shipped_items} items to</p>
            <h3>{shopper.full_name}</h3>
            <h3>{shopper.address_1}</h3>
            <h3>{shopper.address_2}</h3>
            <h3 className="lonely">via Standard shipping</h3>
            {items.map((item)=> (<CheckoutIndexItem key={"checkoutIndex"+item.id} item={item}/>))}
            <div className="in-line-space-between">
              <h2 className="close">Billing address</h2>
              <a className="lnk" href="/#/under_construction"> Edit Billing</a>
            </div>
            <h3>{shopper.full_name}</h3>
            <h3>{shopper.address_1}</h3>
            <h3>{shopper.address_2}</h3>
 
            <h2 id="long"className="close">Payment Options</h2>
            <div className="round-box">
              <div className="in-line lonely">
                <div className="visa"><SiVisa/></div>
                <div className="payment-details-box">
                  <div>Visa ending in <span className="graphik-bold">{shopper.card_end}</span></div>
                  <div>Expires  <span className="graphik-bold">{shopper.card_exp}</span></div>
                </div>
              </div>
              <div className="graphik-medium size-14 margin-16">Security code * <span className="blue-link"><a href="/#/under_construction"></a></span></div>
              <div className="in-line margin-16">
                <input onChange={this.handleChange} type="text" className="white-input security-code  padding-16" placeholder="Enter 111"/>
                <button className="btn grn margin-left">Continue</button>
              </div>
            </div>
            <a  href="https://www.paypal.com/ca/for-you/account/create-account">
              <div className="btn wht long" id="button-box">
                <img className="paypal" src="https://my-co-opt-seed.s3.us-west-1.amazonaws.com/not-merch/paypal.png" alt="" />
              </div>
            </a>
          </div>
        
          <div className="cart-right">
            <div className="sticky">

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
                    <h3>${parseFloat(tax).toFixed(2)}</h3>
                  </div>
                  <div className="in-line cart-right-summary">
                    <h2>Order total</h2>
                    <h2>${parseFloat(tax + total).toFixed(2)}</h2>
                  </div>
                  <div className="in-line end-of-checkout">
                    <h2>Apply a coupon</h2>
                    <h2><BsChevronDown/></h2>
                  </div>
                  <div className="in-line end-of-checkout">
                    <h2>Apply gift cards and bonus cards</h2>
                    <h2><BsChevronDown/></h2>
                  </div>
                  <div className="in-line end-of-checkout">
                    <h2>My Co-opt Member # <span>{shopper.id*458581} <AiFillQuestionCircle/></span></h2>
                    <h2><BsChevronDown/></h2>
                  </div>
                </div>
              </div>
              <div className="guarantee-checkout">52% satisfaction guaranteed <FaInfoCircle/> </div>
              <button onClick={this.handleSubmit} className="btn brn">Submit order</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckoutIndex; 
 