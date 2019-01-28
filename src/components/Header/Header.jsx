import React from 'react';
import { Layout, Menu } from 'antd';
import './header.css';

const { Header: AntHeader } = Layout;

const Header = () => (
  <AntHeader
    style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      background: '#fff',
      padding: '0',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px', width: '850px' }}
    >
      <Menu.Item className="ant-nav-item" key="1">
        Spotify Search
      </Menu.Item>
    </Menu>
  </AntHeader>
);

export default Header;
