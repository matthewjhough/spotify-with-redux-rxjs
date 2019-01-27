import React from 'react';
import { List as AntList } from 'antd';
import Item from './Item';

const List = ({ results }) => (
  <AntList
    itemLayout="horizontal"
    dataSource={results}
    renderItem={item => <Item data={item} />}
  />
);

export default List;
