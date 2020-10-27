import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
/* Library */

import { createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './store';
/* Redux */

const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:language?" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
