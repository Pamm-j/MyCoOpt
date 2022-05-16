import React from "react"
import { Routes, Route, Switch} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
  <div>
    <h1>Welcome to my Co-opt</h1>
    {/* <ProtectedRoute element={<GreetingContainer/>} /> */}
    <Routes>
      <Route path="/login" element={<LoginFormContainer/>}   />
      <Route path="/signup" element={<SignupFormContainer/>}  />
      <Route path="/underconstruction" element={<h2>Sorry, this page is under construction</h2>}  />
      <Route path="/" element={<h1>SPLISH SPOLACHSD</h1>}  />
    </Routes>
  </div>  
)

export default App;