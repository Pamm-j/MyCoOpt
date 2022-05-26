import React from "react";
import Colors from "../../util/colors";
import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'
import { GiSwordsEmblem } from 'react-icons/gi';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from "react-router-dom";
import Constants from "../../util/constants";
import ReviewItem from "../reviews/review_item";
import ReviewForm from "../reviews/review_form";
import Stars from "../reviews/stars";


class ProductShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cartItem: this.props.cartItem,
      review: this.props.review,
      image_view: 0,
      reviewShow:false
      }
    this.toggleReview = this.toggleReview.bind(this)
    this.state.action = this.props.createReview
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  componentDidUpdate(prevProps){
    if( prevProps.product && this.props.product.id !== prevProps.product.id ){
      this.props.fetchProduct( this.props.match.params.id )
      this.props.fetchAllReviews( this.props.match.params.id )
    } 
    if (!prevProps) {
      this.props.fetchProduct( this.props.match.params.id )
      this.props.fetchAllReviews( this.props.match.params.id )
    }
  }
  componentDidMount(){
    this.props.fetchProduct( this.props.match.params.id )
    this.props.fetchAllReviews( this.props.match.params.id )
  }
  toggleImage(){
    let num = this.state.image_view
    num = num + 1
    num = num % this.props.product.photoUrls.length
    this.setState({image_view:num})
  }

  increment = (num)=> () => {
    let newQuantity = JSON.parse(this.state.cartItem.quantity) + num
    if (newQuantity < 1) newQuantity = 0
    const newCartItem = Object.assign({}, this.state.cartItem)
    newCartItem.quantity = newQuantity
    this.setState({cartItem:newCartItem})
  }

  handleClick = (type, value)=>() => {
    const newCartItem = Object.assign({}, this.state.cartItem)
    newCartItem[type] = value
    this.setState({cartItem:newCartItem})
  }

  calculateRating(product_id){

  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const newCartItem = Object.assign({}, this.state.cartItem)
    newCartItem.product_id = this.props.product.id
    this.setState({cartItem:newCartItem}, (()=> {
      if (!Object.values(this.state).includes("")) {
        this.props.createCartItem(this.state.cartItem)
        .then(()=>this.props.history.push(`/category/${this.props.product.category_id}`))
      }}
    ))
  }
  toggleReview(){
    if (this.state.reviewShow === true) {
      this.setState({reviewShow:false})
    } else {
      this.setState({reviewShow:true})
    }
  }

  handleUpdate(review){
    this.setState({action:this.props.updateReview, review:review}, this.toggleReview)
  }

  render(){
    const product = this.props.product
    let thisRating = 0;
    this.props.reviews.forEach((review)=>{
      thisRating += review.rating
    })
    thisRating = thisRating / this.props.reviews.length
    if (!product){
      return null 
      } else return (
        <div> 
          {this.state.reviewShow && (         
            <ReviewForm
              reviewShow={this.state.reviewShow} 
              photoUrl={product.photoUrls[0]}
              name={product.name} 
              brand={product.brand}
              action={this.state.action}
              product_id={product.id}
              toggleReview={this.toggleReview}
              review={this.state.review}
              />
          )}
          <div id={this.state.reviewShow ? "hidden" : ""} className="product-show-page">
            <div className="show-top-boxes">
              <div className="photo-arrow-container">
                <div className="show-photo"><img 
                src={product.photoUrls[this.state.image_view]}/>
                </div>
                <div className="arrow-container">
                  <FiArrowLeftCircle className="arrow" onClick={()=>this.toggleImage()}/>
                  <FiArrowRightCircle className="arrow" onClick={()=>this.toggleImage()}/>
                </div>
              </div>
              <div className="purchase-details">
                <h3 className="lnk">{product.brand}</h3>
                <h1> {product.name}</h1> 
                  <div className="flex-line rating-stars">
                    <div>
                      <Stars rating={thisRating}/>
                      <span id="small-text"> ({this.props.reviews.length})</span>
                    </div>
                    <span> Item #{product.id*Constants.item_key}</span>
                  </div>
                <div id="price">${parseFloat(product.price).toFixed(2)}</div>
                <input type="text" className="invisible-input" value={`Color: ${this.state.cartItem.color}`} readOnly placeholder="Select a Color"/>
                <ul className="show-list" >
                  {product.colors.map((color)=>(
                  <button
                    className={(this.state.cartItem.color === color) ? "round-box  color-btn sizes active" : "round-box  color-btn sizes"}
                    key={"color" + color}
                    onClick={this.handleClick("color", color)}
                    style={{backgroundColor: `${Colors[color]}`}}></button> 
                  ))}
                </ul>
                <input type="text" className="invisible-input" readOnly value={`Size: ${this.state.cartItem.size}`} placeholder="Select a Size"/>

                <ul className="show-list" >
                    {product.sizes.map((size)=>(<button 
                    className={(this.state.cartItem.size === size) ? "round-box  color-btn sizes active" : "round-box  color-btn sizes"}
                    onClick={this.handleClick("size", size)}
                    key={"size" + size}>{size}</button> ))}
                </ul>
                <div className="invisible-input">Quantity</div>
                <div className="amount-ticker">
                  <button className="increment-button" onClick={this.increment(-1)}  ><BsDashCircle/></button>             
                  <input 
                    readOnly
                    className="quantity-input not-too-wide" 
                    type="number" 
                    inputMode="numeric" 
                    value={this.state.cartItem.quantity} />
                  <button className="increment-button" onClick={this.increment(1)} ><BsPlusCircle/></button>
                </div>
                <div className="shipping-details">
                  <div className="in-line radios">
                    <input
                      type="radio"
                      id={product.id+"pickup"}
                      name="shipping" 
                      style={{ accentColor: "#4e4d49" }}
                      value="pickup"
                      checked={this.state.cartItem.delivery_type === "pickup" ? "checked" : "" }
                      onChange={this.handleClick('delivery_type', "pickup")}
                      />
                    <label id={product.id+"pickup"}>Pick up at store--FREE</label>
                  </div>
                  <div className="in-line radios">              
                    <input
                      type="radio"
                      id={product.id+"delivery"}
                      name="shipping"
                      style={{ accentColor: "#4e4d49" }}
                      value="delivery"
                      checked={this.state.cartItem.delivery_type === "delivery" ? "checked" : "" }
                      onChange={this.handleClick('delivery_type', "delivery")}
                      />
                    <label id={product.id+"delivery"}>Ship to Address</label>
                  </div>
                </div>
                  <div className="login-msg"> <GiSwordsEmblem/> To purchase this item, <Link 
                    className="lnk" 
                    to={{ pathname: "/login", state: {oldPath:`/product/${product.id}`}}}
                  >sign in</Link> or <Link 
                    className="lnk" 
                    to={{ pathname: "/signup", state: {oldPath:`/product/${product.id}`}}}
                    >get Co-opted</Link>.
                  </div>
                  {this.props.currentUserId &&<button className='grn btn bottom-of-page' onClick={this.handleSubmit}>Add to Cart ${parseFloat(product.price*this.state.cartItem.quantity).toFixed(2)}</button>}
              </div>
            </div>
            <div className="show-details">{product.description}</div>
            <div className="reviews-container">
              <div className="title-button-container">
                <div className="fancy-small-title">Reviews</div>
                {this.props.currentUserId &&
                <button className="grn btn" onClick={()=>this.setState({reviewShow:true})}>Write a review</button>}
              </div>
              <div className="summary-box"></div>
              {this.props.reviews.map((review)=> <ReviewItem
                        key={review.id + "reviewed"}
                        review={review}
                        currentUserId={this.props.currentUserId}
                        updateReview={this.props.updateReview}
                        deleteReview={this.props.deleteReview}
                        toggleReview={this.toggleReview}
                        handleUpdate={this.handleUpdate}
                        />)}
            </div>


          </div>
        </div>
      )
  }
}

export default ProductShow;
 