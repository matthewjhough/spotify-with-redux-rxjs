import { CLIENT_ID, SCOPES, REDIRECT_URI } from './config';

export const config = {
  client_id: CLIENT_ID,
  scopes: SCOPES,
  redirect_uri: REDIRECT_URI
};

export function login(component) {
  console.log(config);
  let popup = window.open(
    `https://accounts.spotify.com/authorize?client_id=${
      config.client_id
    }&response_type=token&redirect_uri=${config.redirect_uri}&scope=${
      config.scopes
    }&show_dialog=true`,
    'Login with Spotify',
    'width=800,height=600'
  );

  window.spotifyCallback = payload => {
    component.token = payload;
    popup.close();

    fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${payload}`
      }
    })
      .then(response => response.json())
      .then(user => {
        console.log(user);
        component.setState({ user });
        // CHANGE TO SETSTATE
        // TO SAVE USER INFO
      });
  };
}

export function mounted(component) {
  component.token = window.location.hash
    .substr(1)
    .split('&')[0]
    .split('=')[1];

  if (component.token) {
    window.opener.spotifyCallback(component.token);
  }
}
