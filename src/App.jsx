import React, { Component } from 'react';
import { Stream } from './components';
import { login, mounted } from './auth';
import './App.css';

// NEXT:
// 1) Save & Check store - instead of state for auth data.
// 2) Make AJAX Call with proper headers.
// 3) Dispatch returned records to tracks store.

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
            <React.Fragment>
              <Stream />
            </React.Fragment>
          )}
        </header>
      </div>
    );
  }
}

export default App;
