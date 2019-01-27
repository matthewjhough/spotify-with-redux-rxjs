import { combineReducers } from 'redux';
import tracks from './tracks';
import user from './user';
import search from './search';

export default combineReducers({
  tracks,
  user,
  search
});
