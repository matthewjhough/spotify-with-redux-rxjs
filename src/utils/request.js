import { login } from '../auth/index';
import { getUser } from '../store/localStore';
// returns a promise with request info
export const createRequest = (url, method, body) => {
  const user = getUser() || {};
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    ...body
  })
    .then(res => res.json())
    .then(res => {
      if (res.error && res.error.status === 401) {
        login();
      } else if (res.error) return [];
      return res;
    });
};
