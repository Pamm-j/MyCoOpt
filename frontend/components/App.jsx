import React from "react"
import { Routes, Route, Switch} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";


const App = () => (
  <div>
    <h1>Welcome to my Co-opt</h1>
    <Routes>
      <Route path="/greet" element={<GreetingContainer/>}  />
      <Route path="/login" element={<LoginFormContainer/>}  />
    </Routes>
  </div>  
)

export default App;