import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { actions } from './ducks';
import configureStore from './store/configureStore';
import { setTracksAction } from './ducks/tracks';

// const tracks = [
//   {
//     title: 'Some track'
//   },
//   {
//     title: 'Some other track'
//   }
// ];

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
