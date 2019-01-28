import React from 'react';
import { Menu as AntMenu } from 'antd';

const getFirstKey = obj => Object.keys(obj)[0];

class Menu extends React.PureComponent {
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
      <AntMenu.Item key={result}>{result}</AntMenu.Item>
    ));

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { current } = this.state;
    const { results, children } = this.props;
    const currentResults = results[current] && results[current].items;
    return (
      <React.Fragment>
        <AntMenu
          onClick={this.handleClick}
          selectedKeys={this.resolveKey()}
          mode="horizontal"
        >
          {this.resultMenu(results)}
        </AntMenu>
        {children &&
          typeof children === 'function' &&
          children({ currentResults })}
      </React.Fragment>
    );
  }
}

Menu.defaultProps = {
  query: undefined,
  results: {}
};

export default Menu;
