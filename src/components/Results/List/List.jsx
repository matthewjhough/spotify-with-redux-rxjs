import React from 'react';
import { List as AntList } from 'antd';
import Item from './Item';
import './list.css';

const List = ({ results }) => (
  <div className="ant-list-container">
    <AntList
      bordered
      itemLayout="horizontal"
      dataSource={results}
      renderItem={item => <Item data={item} />}
    />
  </div>
);

export default List;
