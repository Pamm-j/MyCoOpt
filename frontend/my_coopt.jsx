import React from 'react'
import ReactDom from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import {login} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDom.render(<Root store={store} />, root)
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch
  window.login = login;
  
  // ReactDom.render(<h1>My Co-opt isnt yet Co-opting.</h1>, root)
})