import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { Results, Search } from './components';
import { login, mounted } from './auth';
import { getUser } from './store/localStore';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    mounted(this);
  }

  render() {
    const user = getUser();
    if (user === null || !user.token) {
      return (
        <div className="App">
          <header className="App-header">
            <Button onClick={() => login(user => this.setState({ user }))}>
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
          <Results />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  user: {}
};
