export const USER_SET = 'USER_SET';

const initialState = {};

export function setUserAction(user) {
  return {
    type: USER_SET,
    user
  };
}

export function setUser(state, { user }) {
  return { ...state, ...user };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_SET:
      return setUser(state, action);
    default:
      return state;
  }
}
