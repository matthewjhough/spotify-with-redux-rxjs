export const TRACKS_SET = 'TRACKS_SET';

const initialState = [];

export function setTracksAction(tracks) {
  return {
    type: TRACKS_SET,
    tracks
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TRACKS_SET:
      return setTracks(state, action);
    default:
      return state;
  }
}

export function setTracks(state, action) {
  const { tracks } = action;
  return [...state, ...tracks];
}
