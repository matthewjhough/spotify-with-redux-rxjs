import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import rootReducer from '../ducks';

const logger = createLogger();

export const epicMiddleware = createEpicMiddleware();
const createStoreWithMiddleware = applyMiddleware(epicMiddleware, logger)(
  createStore
);

export default function configureStore(initialState) {
  const loadedState = initialState === null ? undefined : initialState;
  return createStoreWithMiddleware(rootReducer, loadedState);
}
