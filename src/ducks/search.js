import { createRequest } from '../utils';

export const SET_FETCH = 'SET_FETCH';

const initialState = {};

export function searchAction(query) {
  const url = 'https://api.spotify.com/v1/search';
  const token = 'some_token';
  const method = 'GET';
  return {
    type: SET_FETCH,
    query,
    results: createRequest(url, token, method).then(res => res)
  };
}

// export function setQuery(state, action) {
//   console.log('SET SEARCH RESULTS', state, action);
//   return {};
// }

export function search(state, action) {
  return { ...state, ...action };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FETCH:
      return search(state, action);
    default:
      return state;
  }
}
