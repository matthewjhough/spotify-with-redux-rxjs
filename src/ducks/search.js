import { createRequest } from '../utils';

export const SEARCH_ACTION = 'SEARCH_ACTION';

const initialState = {};

export function searchAction(query, token) {
  const url = 'https://api.spotify.com/v1/search';
  const method = 'GET';
  return {
    type: SEARCH_ACTION,
    query,
    results: createRequest(url, token, method).then(res => res)
  };
}

export function search(state, action) {
  return { ...state, ...action };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTION:
      return search(state, action);
    default:
      return state;
  }
}
