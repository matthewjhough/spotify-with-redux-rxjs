import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { createRequest } from '../utils';

export const SEARCH_ACTION = 'SEARCH_ACTION';
export const RESULTS_ACTION = 'RESULTS_ACTION';
export const SEARCH_URL = 'https://api.spotify.com/v1/search';
export const RESULT_TYPES = 'type=artist,track,album';
export const GET = 'GET';

const initialState = {};

export function searchEpic(action$) {
  return action$.pipe(
    ofType(SEARCH_ACTION),
    mergeMap(action => from(fetchQuery(action))),
    map(resultsAction)
  );
}

export function fetchQuery(action) {
  return createRequest(`${SEARCH_URL}?q=${action.query}&${RESULT_TYPES}`, GET);
}

export function queryAction(query) {
  return {
    type: SEARCH_ACTION,
    query: query
  };
}

export function resultsAction(results) {
  return {
    type: RESULTS_ACTION,
    results: results
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTION:
      return setQuery(state, action);
    case RESULTS_ACTION:
      return setResults(state, action);
    default:
      return state;
  }
}

export function setQuery(state, { results, query }) {
  return { ...state, results, query, loading: true };
}

export function setResults(state, { results }) {
  return { ...state, results, loading: false };
}
