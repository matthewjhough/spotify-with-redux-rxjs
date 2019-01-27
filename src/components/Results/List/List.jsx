import React from 'react';
import { List as AntList } from 'antd';
import Item from './Item';
import './list.css';

const List = ({ results }) => (
  <AntList
    className="ant-list"
    bordered
    itemLayout="horizontal"
    dataSource={results}
    renderItem={item => <Item data={item} />}
  />
);

export default List;
