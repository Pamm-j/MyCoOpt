import React from "react"
import {  Route, Switch, Link} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBar from "./fixed/navbar";
import Footer from "./fixed/footer";
import UnderConstruction from "./fixed/under_construction";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./fixed/spash";
import Greeting from "./greeting/greeting_container";


const App = () => (
  <div>
      <NavBar/>
      <ProtectedRoute path='/' component={Splash} />
      <ProtectedRoute path = '/' component={Greeting}/>
    <div className="webpage">
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}   />
        <AuthRoute path="/signup" component={SignupFormContainer}  />
      </Switch>
      <Footer/>

    </div>  
  </div>
)

export default App; 