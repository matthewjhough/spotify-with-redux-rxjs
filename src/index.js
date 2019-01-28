import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import throttle from 'lodash/throttle';
import configureStore, { epicMiddleware } from './store/configureStore';
import { loadState, saveState } from './store/localStore';
import { rootEpic } from './ducks';
import App from './App.js';
import 'antd/dist/antd.css';

const savedState = loadState();
const store = configureStore(savedState);
epicMiddleware.run(rootEpic);
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
