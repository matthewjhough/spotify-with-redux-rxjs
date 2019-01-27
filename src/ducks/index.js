import { combineReducers } from 'redux';
import tracks from './tracks';
import user from './user';

export default combineReducers({
  tracks,
  user
});
