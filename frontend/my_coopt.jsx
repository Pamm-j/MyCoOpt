import React from "react";
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root'

document.addEventListener("DOMContentLoaded",()=>{
  const root = document.getElementById("root");
  // let store = configureStore()
  ReactDOM.render(<h1>My Co-opt is down.<br/> Come back soon!</h1>, root);
});
