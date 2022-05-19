import React from "react";

const Splash = (props) => {
  console.log(props)
  return (
    <div className='splash'> 
    <div className="splash-add">
      <h3>PEDAL POWER</h3>
      <h1>The one-stop shop for all your two-wheel needs</h1>
      <p>Whether you need help with that pesky flat tire or need to trade in your kid's bike, co-op members can save more on the next family bike ride.</p>
      <a className='grn btn' href={`/#/category/70`}>Explore all Cycle</a>
    </div>
    </div>
  )
}

export default Splash; 