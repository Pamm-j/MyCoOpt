import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img className="tree" src="https://satchel.rei.com/media/img/footer/trees_left.svg" alt="" />
      <h3 > How are we doing? Give us <Link className='grn-lnk' to="/feedback">feedback</Link> on this page. </h3>
      <img className="tree" src="https://satchel.rei.com/media/img/footer/trees_right.svg" alt="" />
    </div>
  )
}

export default Footer; 