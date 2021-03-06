import React from "react";
import { Link } from "react-router-dom";
import CategoryIndexContainer from "../listings/category_index_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { GoLocation } from 'react-icons/go'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { GiSBrick, GiCartwheel } from 'react-icons/gi'
import { FaCocktail } from 'react-icons/fa'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'


class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {search:""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = ()=>(e)=> this.setState({search: e.target.value})
  
  componentDidMount(){
    if (this.props.loggedIn) {
      this.props.fetchAllCartItems(this.props.currentUser.id)
      .then(this.setState({search:""}))
    }
  }
  componentDidUpdate(prevProps){
    if (this.props.loggedIn !== prevProps.loggedIn && this.props.currentUser) {
      this.props.fetchAllCartItems(this.props.currentUser.id)
    }
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.search) {
      let term = this.state.search
      this.props.fetchSearchProducts(term)
      .then(()=>this.props.history.push(`/search_results/${term}`))
    }
    this.setState({search:""})
  }

  render(){
    
    let menu;
    if (this.props.loggedIn) {
      const split_name = this.props.currentUser.full_name.split(' ')
      menu =  <span className='nav-btn'>Hi, {`${split_name[0]}`} <Link onClick={this.props.logout} to={'/login'}>Logout</Link></span>
    } else {
      menu = <a href="/#/login" className='nav-btn'><p>Sign In</p></a>
    } 
    return (
      <div>
        
      <div className="header">
        <div className="personal-links">
          <div className="personal-links-inner-wrapper">
            <div className="each-link-set">
              <a href="https://www.linkedin.com/in/pamela-jane/" className="grey icon"  target="_blank" ><IoLogoLinkedin /> </a>
              <a href="https://www.linkedin.com/in/pamela-jane/" className="grey" target="_blank" > LinkedIn</a> 
            </div>
            <div className="each-link-set">
              <a href="https://github.com/Pamm-j/MyCoOpt" className="grey icon" target="_blank" ><IoLogoGithub /></a>
              <a href="https://github.com/Pamm-j/MyCoOpt" className="grey"  target="_blank"> Github</a>
            </div>
            <div className="each-link-set">
              <a href="https://pamm-j.github.io/circuits/" className="grey icon" id='brick'  target="_blank"><GiSBrick /></a>
              <a href="https://pamm-j.github.io/circuits/" className="grey"  target="_blank"> Circuits Game</a>
            </div>
            <div className="each-link-set">
              <a href="https://boozy1.herokuapp.com/#/" className="grey icon" id='brick' target="_blank" ><FaCocktail /></a>
              <a href="https://boozy1.herokuapp.com/#/" className="grey" target="_blank" > Boozy</a>
            </div>
            <div className="each-link-set">
              <a href="https://pamela-jane.net" className="grey icon" id='brick'  target="_blank"><GiCartwheel /></a>
              <a href="https://pamela-jane.net" className="grey"  target="_blank"> Portfolio</a>
            </div>
          </div>
        </div>
        <div className="inner-header">
          <div className="inner-header-left">
            <a href="/#/"><img className="logo" src={window.logo} /></a>
            <Link className='shop-btn' to='/'>Shop</Link>
          </div>
          <form className="search-input-box" onSubmit={this.handleSubmit}>
            <input 
              className="search-input"
              type="text"
              placeholder="Search for great gear"
              value={this.state.search} 
              onChange={this.handleChange()}
            />
          </form>
          <div className="inner-header-right">
            <div className="set">
              <a href="/#/stores"> <GoLocation className="icon"/></a>
              <a href="/#/stores" className='nav-btn'> Stores</a>
            </div>
            <div className="set">
              <AiOutlineUser className="icon"/>  
              {menu}
            </div>

            <div className="set">
              <a href="/#/cart"><MdOutlineShoppingCart className="icon"/></a>
              <a href="/#/cart" className='nav-btn'><p>Cart</p></a>
            {this.props.loggedIn && this.props.cartItems.length !==0 && <div className="cart-size" >{this.props.cartItems.length}</div>}     
            </div>
    
            
          </div>
        </div>
        <CategoryIndexContainer />
      </div>
      </div>
    )
  }
}
export default NavBar; 