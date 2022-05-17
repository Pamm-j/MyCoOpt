import React from 'react'
import ReactDom from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import {login} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  // const store = configureStore();
  // ReactDom.render(<h1>My Co-opt isnt yet Co-opting.</h1>, root)
  // window.login = login;
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch
  ReactDom.render(<Root store={store} />, root)
})