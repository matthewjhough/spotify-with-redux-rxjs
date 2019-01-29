import React from 'react';
// import { Menu } from 'antd';
import { Menu } from './Menu';
import { List } from './List';
import { LastQuery } from './LastQuery';
import './results.css';

const Results = ({ query, results, loading }) => (
  <div className="results">
    <LastQuery query={query} />
    <div className="results-display">
      <Menu results={results}>
        {({ currentResults }) => (
          <List loading={loading} results={currentResults} />
        )}
      </Menu>
    </div>
  </div>
);

Results.defaultProps = {
  query: undefined,
  results: {}
};

export default Results;
