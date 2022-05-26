import React from "react"
import { Route, Switch, Link, Redirect} from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./fixed/navbar_container";
import Footer from "./fixed/footer";
import UnderConstruction from "./fixed/under_construction";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {CategoryShowContainer} from "./listings/category_show_container";
import ProductShowContainer from "./listings/product_show_container";
import SplashContainer from "./fixed/splash_container";
import {CartIndexContainer, CheckoutIndexContainer} from "./cart/cart_index_container";
import OrderSuccess from "./cart/order_success";
import TermsPrivacy from "./fixed/terms_privacy";
import { SearchShowContainer } from "./listings/search_show_container";

const App = () => (
  
  <div >
    <NavBarContainer/>
    <div >
      <Switch >
        <Route path='/' component={SplashContainer} exact/>
        <AuthRoute className="webpage" path="/login" component={LoginFormContainer}   />
        <AuthRoute className="webpage"  path="/signup" component={SignupFormContainer}  />
        <Route className="webpage"  path="/under_construction" component={UnderConstruction} />
        <ProtectedRoute path="/cart" component={CartIndexContainer} />
        <ProtectedRoute path="/checkout" component={CheckoutIndexContainer} />
        <Route path="/order_success" component={OrderSuccess} />
        <Route path="/search_results/:searchTerm" component={SearchShowContainer} />
        <Route path="/category/:id" component={CategoryShowContainer} />
        <Route path="/product/:id" component={ProductShowContainer} />
        <Route path="/feedback" component={()=>(<div className="feedback" ><img src="https://my-co-opt-seed.s3.us-west-1.amazonaws.com/cat-spash/feed_back.jpg" /></div>)} ></Route>
        <Route path="/learnmore" component={()=>(<div className="webpage learnmore"> You have already learned everything. Congratulations.</div>)} ></Route>
        <Route path="/termsandprivacy" component={TermsPrivacy} ></Route>
        <Redirect className="webpage"  to="/under_construction" />
      </Switch>
    </div>
    <Footer/>
  </div>
)

export default App; 