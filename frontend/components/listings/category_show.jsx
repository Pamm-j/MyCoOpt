import React from "react";
import { Link } from "react-router-dom";

class CategoryShow extends React.Component{
  componentDidMount(){
    this.props.fetchCategoryProducts( this.props.match.params.id )
  }
  render(){
    return (
      <ul className="categories-show-container">
        {this.props.products.map((product)=> <li key={product.id+"product"}>{product.name}</li>)}
      </ul>
    )
  }
}

export default CategoryShow;
 