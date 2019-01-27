import React, { Component } from 'react';
import { Stream } from './components';
import { login, mounted } from './auth';
import './App.css';

class App extends Component {
  componentDidMount() {
    mounted(this);
  }

  state = {
    user: undefined
  };

  render() {
    console.log(this, this.state);
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.user ? (
            <button onClick={() => login(this)}>Login with Spotify</button>
          ) : (
            ''
          )}
          <Stream />
        </header>
      </div>
    );
  }
}

export default App;
