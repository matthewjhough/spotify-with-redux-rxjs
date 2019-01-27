// returns a promise with request info
export const createRequest = (url, token, method, params) =>
  fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) return [];
      return res;
    });
