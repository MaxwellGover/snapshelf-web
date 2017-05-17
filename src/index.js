import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '~/containers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import * as reducers from './redux';

const store = createStore(
  combineReducers(reducers),
  compose(
  	applyMiddleware(thunk),
  	window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
