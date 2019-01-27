import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import throttle from 'lodash/throttle';
import 'antd/dist/antd.css';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { loadState, saveState } from './store/localStore';

const savedState = loadState();
const store = configureStore(savedState);
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  1000
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
