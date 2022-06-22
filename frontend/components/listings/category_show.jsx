import React from "react";
import { Link } from "react-router-dom";
import CatSplash from "./category_splash"
import ProductIndexItem from "./product_index_item";
import FilterItem from "./filter_item";

class CategoryShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sizes:[],
      colors:[]
    }
    this.handleFilterClick = this.handleFilterClick.bind(this)
  }
  combineTraits(type){
    let traits = []
    this.props.products.forEach((product)=> {
      product[type].forEach((el)=> !traits.includes(el) ? traits.push(el): null)
    })
    traits = traits.sort().reverse().sort(this.compareSizes)
    return traits;
  }

  compareSizes(l,r){
    let sizes = ["XXS","XS","S", "M", "L", "XL", "XXL"]
    let leftIndex = sizes.indexOf(l)
    let rightIndex = sizes.indexOf(r)
    let comp = leftIndex < rightIndex ? -1 : 1;
    return comp
  }
  componentDidUpdate(prevProps){
    if( prevProps.category && this.props.category.id !== prevProps.category.id ){
      this.props.action( this.props.match.params.id )
    } 
    if ( this.props.category && !prevProps){
      this.props.action( this.props.match.params.id )
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0)
    if (this.props.searchTerm){
      this.props.action(this.props.searchTerm)
    } else {
      this.props.action( this.props.match.params.id )
    }
  }

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


  displayFilteredProducts(){
    let filteredProducts=[];
    if (Object.values(this.state).every((arr)=> arr.length === 0)) {
      filteredProducts = this.props.products
    } else {
      this.props.products.forEach((product)=> {
        if(
          (product.sizes.some((size)=>this.state.sizes.includes(size)) && Object.values(this.state.colors).length === 0) ||
          (Object.values(this.state.sizes).length === 0 && product.color_families.some((color)=>this.state.colors.includes(color))) ||
          (product.sizes.some((size)=>this.state.sizes.includes(size)) && product.color_families.some((color)=>this.state.colors.includes(color)))
          ) {
          filteredProducts.push(product)
        }
      })
    }
    if (!filteredProducts.length) {
      return (<div>Sorry, no products meet that description</div>)
    } else {
      return (filteredProducts.map((product)=> 
        <ProductIndexItem 
          key={product.id+"product"} 
          product={product}/>
        ))
    }
  }

  render(){

    if (!this.props.products){
      return <div className="loading"></div>
    } else { 
      this.colorArray = this.combineTraits("color_families")
      this.sizeArray = this.combineTraits("sizes")
      return (
        <div>
          {this.props.category && <CatSplash category={this.props.category}/>}
          <div className="category-show-wrapper">
          <div  className="show-filter">
            <div className="filter-title">Filter</div>
              <FilterItem 
                handleFilterClick={this.handleFilterClick} 
                subtitle="Sizes" 
                array={this.sizeArray}
                // cb={}
            />
              <FilterItem 
                handleFilterClick={this.handleFilterClick} 
                subtitle="Colors" 
                array={this.colorArray}
              />
            </div>
            {/* <Filter handleFilterClick={this.handleFilterClick}/> */}
            <div className="cat-item-index-wrapper">
              {this.displayFilteredProducts()}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CategoryShow;
 