import React from "react"
import { Routes, Route, Switch, Link} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
  <div>
    <div className="header">
      <div className="inner-header">
        <div className="inner-header-left">
          <img className="logo" src="final-logo.png" />
          <Link className='shop-btn' to='/underconstruction'>Shop</Link>
        </div>
        <div className="inner-header-right">
          <Link className='stores-btn' to='/underconstruction'>Stores</Link>
          <Link className='cart-btn' to='/underconstruction'>Cart</Link>
        </div>
      </div>
    </div>
    {/* <ProtectedRoute element={<GreetingContainer/>} /> */}
    <Routes>
      <Route path="/login" element={<LoginFormContainer/>}   />
      <Route path="/signup" element={<SignupFormContainer/>}  />
      <Route path="/underconstruction" element={<h2>Sorry, this page is under construction</h2>}  />
      <Route path="/" element={<h1>SPLISH SPOLACHSD</h1>}  />
    </Routes>
    <div className="footer"> How are we doing? Give us feedback on this page. </div>
  </div>  
)

export default App;