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
import ShippingRadios from "./shipping_radios";


class ProductShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cartItem: this.props.cartItem,
      review: this.props.review,
      image_view: 0,
      reviewShow:false,
      colorSelected: "notyet",
      sizeSelected: "notyet"
      }
    this.toggleReview = this.toggleReview.bind(this)
    this.state.action = this.props.createReview                          //WHAAAT?
    this.handleUpdate = this.handleUpdate.bind(this)
    this.search = this.search.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidUpdate(prevProps){
    if( prevProps.product && this.props.product.id !== prevProps.product.id && this.props.match.params){
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
    window.scrollTo(0, 0)
  }
  toggleImage(){
    let num = this.state.image_view
    num = (num + 1) % this.props.product.photoUrls.length
    this.setState({image_view:num})
  }

  increment = (num)=> () => {
    let newQuantity = Number(this.state.cartItem.quantity) + num
    if (newQuantity < 1) newQuantity = 0
    const newCartItem = Object.assign({}, this.state.cartItem)
    newCartItem.quantity = newQuantity
    this.setState({cartItem:newCartItem})
  }

  handleClick = (type, value)=>() => {
    let string = type + 'Selected'
    this.setState({[string]:true})
    const newCartItem = Object.assign({}, this.state.cartItem)
    newCartItem[type] = value
    this.setState({cartItem:newCartItem})
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.state.cartItem.color === "") this.setState({colorSelected:false})
    if (this.state.cartItem.size  === "") this.setState({sizeSelected:false})
    const newCartItem = Object.assign({}, this.state.cartItem)
    newCartItem.product_id = this.props.product.id
    let duplicateItem  = this.props.cartItems.filter((cartItem)=> {
      return (cartItem.id === this.props.product.id &&
      cartItem.color === this.state.cartItem.color &&
      cartItem.size === this.state.cartItem.size )
    })
    if (duplicateItem.length !== 0){
      let duplicateItemId = duplicateItem[0].cart_item_id
      let newQuantity = this.state.cartItem.quantity + duplicateItem[0].quantity
      this.props.updateCartItem({id:duplicateItemId, quantity:newQuantity})
      .then(()=>this.props.history.push(`/category/${this.props.product.category_id}`))
      return
    }

    this.setState({cartItem:newCartItem}, (()=> {
      if (!Object.values(this.state).includes("")) {
        this.props.createCartItem(this.state.cartItem)
        .then(()=>this.props.history.push(`/category/${this.props.product.category_id}`))
      }}
    ))
  }

  toggleReview = ()=>this.setState({reviewShow: !this.state.reviewShow})

  message(product) {
    if (!this.props.currentUserId){
      return (
        <div className="login-msg in-line">
          <GiSwordsEmblem/>
          <div> To purchase this item, <Link 
                                        className="lnk" 
                                        to={{ pathname: "/login", state: {oldPath:`/product/${product.id}`}}}
                                        >sign in</Link> or <Link
                                        className="lnk" 
                                        to={{ pathname: "/signup", state: {oldPath:`/product/${product.id}`}}}
                                        >get Co-opted</Link>.
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="login-msg in-line">
            <GiSwordsEmblem className="sword"/>
            <p> It's dangerous to go alone!
               <span> ${parseFloat(product.price*this.state.cartItem.quantity*0.1).toFixed(2)} </span>
              Take this.
            </p>
          </div>
          <button 
            className='grn btn bottom-of-page' 
            onClick={this.handleSubmit}
            >Add to Cart 
            {this.state.colorSelected !== "notyet"  && this.state.sizeSelected !== "notyet"  &&
             this.state.colorSelected !== false && this.state.sizeSelected !== false  &&
             <span> —${parseFloat(product.price*this.state.cartItem.quantity).toFixed(2)}</span>}
          </button>
        </div>
      )
    }
  }
  handleUpdate(review){
    this.setState({action:this.props.updateReview, review:review}, this.toggleReview)
  }
  search(name){
    this.props.fetchSearchProducts(name)
    .then(()=>this.props.history.push(`/search_results/${name}`))
  }

  render(){
    const product = this.props.product
    let thisRating = 0;
    this.props.reviews.forEach((review)=>{
      thisRating += review.rating
    })
    thisRating = thisRating / this.props.reviews.length
    if (!product){
      return <div className="loading"></div> 
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
                <h3 ><button className="not-button" onClick={()=>this.search(product.brand)} >{product.brand}</button></h3>
                <h1> {product.name}</h1> 
                  <div className="flex-line rating-stars">
                    <div>
                      <Stars rating={thisRating} amount={this.props.reviews.length}/>
                      
                    </div>
                    <span> Item #{product.id*Constants.item_key}</span>
                  </div>
                <div id="price">${parseFloat(product.price).toFixed(2)}</div>
                <input 
                  type="text" className="invisible-input" value={`Color: ${this.state.cartItem.color}`} readOnly placeholder="Select a Color"/>
                <ul className="show-list" >
                  {product.colors.map((color)=>(
                  <button
                    className={(this.state.cartItem.color === color) ? "round-box  color-btn sizes active" : "round-box  color-btn sizes"}
                    key={"color" + color}
                    onClick={this.handleClick("color", color)}
                    style={{backgroundColor: `${Colors[color]}`}}></button> 
                  ))}
                </ul>
                {this.state.colorSelected === false && <div className="error"> please select an available color</div>}
                <input type="text" className="invisible-input" readOnly value={`Size: ${this.state.cartItem.size}`} placeholder="Select a Size"/>

                <ul className="show-list" >
                    {product.sizes.map((size)=>(<button 
                    className={(this.state.cartItem.size === size) ? "round-box  color-btn sizes active" : "round-box  color-btn sizes"}
                    onClick={this.handleClick("size", size)}
                    key={"size" + size}>{size}</button> ))}
                </ul>
                {this.state.sizeSelected === false && <div className="error"> please select an available size</div>}
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
                  <ShippingRadios
                    delivery_type={this.state.cartItem.delivery_type}
                    handleClick={this.handleClick}
                    product={this.state.cartItem}
                  />
                </div>
                  {this.message(product)}
              </div>
            </div>
            <div className="show-details">{product.description}</div>
            <div className="reviews-container">
              <div className="title-button-container">
                <div className="fancy-small-title">Reviews</div>
                {this.props.currentUserId && this.props.reviews.every(review=> (review.reviewer_id !== this.props.currentUserId))  &&
                <button className="grn btn" onClick={()=>this.setState({reviewShow:true})} >Write a review</button>}
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
                fetchAllReviews={this.props.fetchAllReviews}
                product={product}
              />)}
            </div>


          </div>
        </div>
      )
  }
}

export default ProductShow;
 