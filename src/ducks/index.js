import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import tracks from './tracks';
import user from './user';
import search, { searchEpic } from './search';

export const rootEpic = combineEpics(searchEpic);

export default combineReducers({
  tracks,
  user,
  search
});
