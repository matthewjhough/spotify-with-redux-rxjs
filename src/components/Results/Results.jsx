import React from 'react';
import { Menu } from 'antd';
import { List } from './List';
import './results.css';

const getFirstKey = obj => Object.keys(obj)[0];

class Results extends React.Component {
  state = {
    current: getFirstKey(this.props.results)
  };

  resolveKey = () => {
    const { current } = this.state;
    const { results } = this.props;
    if (current) return [current];
    else if (getFirstKey(results))
      this.setState({
        current: getFirstKey(results)
      });
  };

  resultMenu = results =>
    Object.keys(results).map(result => (
      <Menu.Item key={result}>{result}</Menu.Item>
    ));

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { current } = this.state;
    const { query, results } = this.props;
    const currentResults = results[current] && results[current].items;
    return (
      <div className="results">
        {query && (
          <p>
            Results for latest search{' '}
            <span className="results-bold">"{`${query}`}"</span>
          </p>
        )}

        <Menu
          onClick={this.handleClick}
          selectedKeys={this.resolveKey()}
          mode="horizontal"
        >
          {this.resultMenu(results)}
        </Menu>
        <List results={currentResults} />
      </div>
    );
  }
}

Results.defaultProps = {
  query: undefined,
  results: {}
};

export default Results;
