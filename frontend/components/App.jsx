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
import CategoryShowContainer from "./listings/category_show_container";

const App = () => (
  <div >
    <NavBarContainer/>
    <div >
      <Switch >
        <Route path='/' component={Splash} exact/>
        <AuthRoute className="webpage" path="/login" component={LoginFormContainer}   />
        <AuthRoute className="webpage"  path="/signup" component={SignupFormContainer}  />
        <Route className="webpage"  path="/under_construction" component={UnderConstruction} />
        <Route path="/category/:id" component={CategoryShowContainer} />
        <Redirect className="webpage"  to="/under_construction" />
      </Switch>
    </div>
    <Footer/>
  </div>
)

export default App;