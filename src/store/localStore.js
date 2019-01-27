export const saveState = state =>
  sessionStorage.setItem('state', JSON.stringify(state));

export const loadState = () => {
  try {
    return JSON.parse(sessionStorage.getItem('state'));
  } catch (err) {
    return {};
  }
};

export const saveUser = user =>
  sessionStorage.setItem('user', JSON.stringify(user));

export const getUser = () => JSON.parse(sessionStorage.getItem('user'));
