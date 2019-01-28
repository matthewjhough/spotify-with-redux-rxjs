import React from 'react';
import { List as AntList } from 'antd';
import Item from './Item';
import './list.css';

const List = ({ results, loading }) => (
  <div className="ant-list-container">
    <AntList
      bordered
      loading={loading}
      itemLayout="horizontal"
      dataSource={results}
      renderItem={item => <Item data={item} />}
    />
  </div>
);

export default List;
