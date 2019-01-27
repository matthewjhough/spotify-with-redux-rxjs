import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../ducks';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(initialState) {
  const loadedState = initialState === null ? undefined : initialState;
  return createStoreWithMiddleware(reducers, loadedState);
}
