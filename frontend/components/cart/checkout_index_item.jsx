import React from "react";
import { Link } from "react-router-dom";
import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'
import Constants from "../../util/constants";

class CheckoutIndexItem extends React.Component {
  aWeekAway(){
    const today = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let date = today.getDate()
    let month = today.getMonth()
    let day = today.getDay()
    date = date + 7
    if ([0,2,4,6,7,9,11].includes(month) && date > 31){
      date = date % 31
      month += 1
    } else if ([3,5,8,10].includes(month) && date > 30){
      date = date % 30
      month += 1
    } else if (month === 1 && date > 28){
      date = date % 28
      month = 2
    }
    const newDay = `${days[day]}, ${months[month]} ${date}`
    return newDay
  }

  render(){
    let item = this.props.item

    return(
      <div className="round-box checkout-top-margin">
        <div className="checkout-index-item ">
          <div className="in-line-close cart-head">
            <h3 className="reg-14">Estimated Arrival</h3>
            <h1 className="bold-16">{this.aWeekAway()}</h1>
          </div>
          <div className="info-wrapper">
            <div className="checkout-index-photo"><img src={item.photoUrls[0]} /></div>
            <div className="checkout-index-item-details">
              <div>{item.brand}</div>
              <div>#{item.name}</div>
              <div>Color: {item.color}</div>
              <div>Size: {item.size}</div>
              <div>Item: {item.id*Constants.item_key}</div>
            </div>
          </div>
          <div className="outer-pair">
            <div className="bold-14">QTY:{item.quantity}</div>
            <div className="inner-pair">
              <div className="reg-16 big-right-margin">${parseFloat(item.price).toFixed(2)}</div>
              <div className="bold-16 big-right-margin">${parseFloat(item.price  * item.quantity).toFixed(2)}</div>
            </div>
          </div>    
        </div>
      </div>
    )
  }
  }

export default CheckoutIndexItem; 