import React from "react";
import { Link } from "react-router-dom";

class CategoryIndex extends React.Component{
  componentDidMount(){
    this.props.fetchCategories()
  }
  render(){
    return (
      <ul className="categories-container">
        {this.props.categories.map((category)=> <li key={category.id+"category"}>
          <Link className="category-link" to={`/category/${category.id}`} >{category.title}
          </Link>
          </li>
          )}
      </ul>
    )
  }
}

export default CategoryIndex 
