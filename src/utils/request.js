// returns a promise with request info
export const createRequest = (url, token, method, params) =>
  fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: {
      ...params
    }
  })
    .then(res => res.json())
    .catch(err => err);
