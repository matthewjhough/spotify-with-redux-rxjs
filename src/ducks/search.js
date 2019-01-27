import { createRequest } from '../utils';

export const SEARCH_CALL = 'SEARCH_CALL';

const initialState = {};

export function searchAction(query) {
  return {
    type: SEARCH_CALL,
    query
  };
}

export function search(dispatch, action, ...rest) {
  console.log('Action...', dispatch, action, rest);
  const url = 'https://api.spotify.com/v1/search';
  const token = 'some_token';
  const method = 'GET';
  const params = {
    q: 'test'
  };
  // todo: fetch data
  return function(dispatch) {
    return createRequest(url, token, method, params).then(res => dispatch(res));
  };
  // const result = {};
  // return { ...state, ...result };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CALL:
      return search(state, action);
    default:
      return state;
  }
}
