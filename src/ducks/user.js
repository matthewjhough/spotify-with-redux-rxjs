export const USER_SET = 'USER_SET';

const initialState = {};

export function setUserAction(user) {
  return {
    type: USER_SET,
    user
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_SET:
      return setUserReducer(state, action);
    default:
      return state;
  }
}

export function setUserReducer(state, { user }) {
  return { ...state, ...user };
}
