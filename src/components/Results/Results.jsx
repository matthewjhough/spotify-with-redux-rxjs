import React from 'react';
// import { Menu } from 'antd';
import { Menu } from './Menu';
import { List } from './List';
import { LastQuery } from './LastQuery';
import './results.css';

const Results = ({ query, results, loading }) => (
  <div className="results">
    <LastQuery query={query} />
    <Menu results={results}>
      {({ currentResults }) => (
        <List loading={loading} results={currentResults} />
      )}
    </Menu>
  </div>
);

Results.defaultProps = {
  query: undefined,
  results: {}
};

export default Results;
