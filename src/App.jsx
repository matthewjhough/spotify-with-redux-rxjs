import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { Stream, Search } from './components';
import { login, mounted } from './auth';
import './App.css';

// NEXT:
// 1) Save & Check store - instead of state for auth data.
// 2) Make AJAX Call with proper headers.
// 3) Dispatch returned records to tracks store.

export default class App extends Component {
  componentDidMount() {
    mounted(this);
  }

  render() {
    const { setUser, user } = this.props;

    if (!user.token) {
      return (
        <div className="App">
          <header className="App-header">
            <Button onClick={() => login(setUser)}>
              Login with Spotify
              <Icon type="user" />
            </Button>
          </header>
        </div>
      );
    }

    return (
      <div className="authenticated-content">
        <div className="content-container">
          <Search />
          <Stream />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  user: {}
};
