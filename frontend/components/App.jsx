import React from "react"
import {  Route, Switch, Link, Redirect} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./fixed/navbar_container";
import Footer from "./fixed/footer";
import UnderConstruction from "./fixed/under_construction";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./fixed/spash";


const App = () => (
  <div >
    <NavBarContainer/>
    <Switch>
      <Route path='/' component={Splash} exact/>
      <AuthRoute path="/login" component={LoginFormContainer}   />
      <AuthRoute path="/signup" component={SignupFormContainer}  />
      <Route path="/under_construction" component={UnderConstruction} />
      <Redirect to="/under_construction" />
    </Switch>
    <Footer/>
  </div>
)

export default App; 