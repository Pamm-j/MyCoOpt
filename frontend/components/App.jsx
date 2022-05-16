import React from "react"
import {  Route, Switch, Link} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBar from "./fixed/navbar";
import Footer from "./fixed/footer";
import UnderConstruction from "./fixed/under_construction";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
  <div>
    <NavBar/>
    <ProtectedRoute path='/' component={GreetingContainer} />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}   />
      <AuthRoute path="/signup" component={SignupFormContainer}  />
      <Route path="/" component={UnderConstruction}  />
    </Switch>
    <Footer/>

  </div>  
)

export default App; 