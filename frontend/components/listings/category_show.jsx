import React from "react";
import { Link } from "react-router-dom";

class CategoryShow extends React.Component{
  componentDidUpdate(prevProps){
    if(this.props.category.id !== prevProps.category.id){
      this.props.fetchCategoryProducts( this.props.match.params.id )
    }
  }
  componentDidMount(){
    this.props.fetchCategoryProducts( this.props.match.params.id )
  }
  render(){
    return (
      <div >
        <ul>
          {this.props.products.map((product)=> <li key={product.id+"product"}>{product.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default CategoryShow;
 