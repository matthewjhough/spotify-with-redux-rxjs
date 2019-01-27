import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { setTracksAction } from './ducks/tracks';

const tracks = [];
const store = configureStore();
store.dispatch(setTracksAction(tracks));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
