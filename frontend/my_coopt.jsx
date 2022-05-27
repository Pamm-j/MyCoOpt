import React from 'react'
import ReactDom from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import { fetchSearchProducts } from './actions/listings_actions';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
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
  // window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchSearchProducts = fetchSearchProducts;

  ReactDom.render(<Root store={store} />, root)
})