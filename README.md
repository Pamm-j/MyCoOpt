<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
 
 
<!-- ![alt text](https://github.com/) finish wiht info to png  -->

# Welcome to My Co-opt
My Co-opt, an REI Co-op clone, is a full-stack web application that replicates the primary features of **_rei.com_**. My Co-opt focuses on my personal interests of cycling and travel. Users can browse a vast collection of products through the use both backend searches and front end filters. Users can add products to their personal cart and checkout items in thier cart when they are finished.  

LIVE-LINK: https://my-co-opt.herokuapp.com/#/


## Technologies Used
My Co-opt was constructed utilizing a combination of Ruby on Rails, Postgres, React, Redux, JavaScript, HTML, and CSS. Ruby on Rails was used to create a Model-View-Controller Architecture with Postgres used as the database. React and Redux were then incorporated to dynamically connect the backend to the frontend. AWS S3 was used to store media assets which are fetched as needed. The frontend was structured with HTML and styled with CSS.


## Features
### Products Search and Filter
Users can find by products through the use of either the search bar, the cateogry links or filters on the product display page. A dropdown menu on each show-page allows users to filter results using dynamically created categories. Using the Search Bar, products are fetched based on the key words being found in the title or description of the product. 
<!-- ![rainforest_search](https://user-images.githubusercontent.com/59151493/166298514-37f8a4fb-4f52-4fe7-8722-4bba67765f78.gif) -->

```
  handleSubmit(e){
    e.preventDefault()
    if (this.state.search) this.props.fetchSearchProducts(this.state.search)
    .then(()=>this.props.history.push(`/search_results/${this.state.search}`))
  }
```
```
  handleFilterClick(trait){
    let category = Object.keys(trait)[0]
    trait = Object.values(trait)[0]
    let traitArrayClone = this.state[category].slice()
    if(this.state[category].includes(trait)) {
      traitArrayClone = traitArrayClone.filter((el)=> el !== trait)
    } else {
      traitArrayClone.push(trait)
    }
    this.setState({[category]:traitArrayClone} )
  }

```

### Update Cart

<!-- ![my_coopt_cart](https://user-images.githubusercontent.com/) -->

Users can add, update quantities, and delete products from their cart using buttons. Users are prompted to login before they can add items to their cart. Users can checkout their cart when they are finished shopping. Total costs will be determined based on selected items at the checkout page, and cart items will be deleted from the cart after payment is complete.

```
  increment = (num)=> () => {
    let newQuantity = JSON.parse(this.props.item.quantity) + num
    if (newQuantity < 1) newQuantity = 0
    this.props.updateCartItem({id:this.props.item.cart_item_id, quantity:newQuantity})
  } 
```

```
export const deleteCartItems = (shopperId) => (
  $.ajax ({
    url: `/api/cart_items/${shopperId}`,
    method: "DELETE"
  })
)
export const deleteCartItem = (cartItemId) => (
  $.ajax ({
    url: `/api/cart_items/${cartItemId}?individual=true`,
    method: "DELETE"
  })
)
```

### Leave Reviews
If logged in, users can leave reviews for products, which includes a mandatory star rating, and an option headline and body. Reviews are created and updated using a single form, controlled by a model. The component is given an "acion" as a prop, allowing it to work for both creating and updating reviews. Star ratings for all reviews of a product are averaged and displayed as an overall rating on the product pages.

![my_coopt_reviews](https://user-images.githubusercontent.com/)

```
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.action(this.state)
    .then(()=>this.props.toggleReview())
  }
```
