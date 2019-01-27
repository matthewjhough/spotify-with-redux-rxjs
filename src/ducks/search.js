import { createRequest } from '../utils';

export const SEARCH_ACTION = 'SEARCH_ACTION';
export const SEARCH_URL = 'https://api.spotify.com/v1/search';

const initialState = {};

export function searchAction(query) {
  const url = `${SEARCH_URL}?q=${query}&type=artist,track,album`;
  const method = 'GET';
  return {
    type: SEARCH_ACTION,
    query,
    results: createRequest(url, method).then(res => res)
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTION:
      return resultReducer(state, action);
    default:
      return state;
  }
}

export function resultReducer(state, action) {
  return { ...state, ...action };
}
