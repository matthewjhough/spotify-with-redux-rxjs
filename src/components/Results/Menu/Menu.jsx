import React from 'react';
import { Menu as AntMenu, Icon } from 'antd';
import './menu.css';

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

  iconType = txt => {
    switch (txt) {
      case 'artists':
        return <Icon type="user" />;
      case 'tracks':
        return <Icon type="customer-service" />;
      case 'albums':
        return <Icon type="solution" />;
      default:
        return;
    }
  };

  resultMenu = results =>
    Object.keys(results).map(result => (
      <AntMenu.Item key={result}>
        {this.iconType(result)}
        {result}
      </AntMenu.Item>
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
          theme="light"
          className="ant-menu-custom"
          onClick={this.handleClick}
          selectedKeys={this.resolveKey()}
          mode="vertical"
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
