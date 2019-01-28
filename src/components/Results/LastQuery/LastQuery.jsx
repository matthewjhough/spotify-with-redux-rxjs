import React from 'react';

const LastQuery = ({ query }) => (
  <React.Fragment>
    {query && (
      <p>
        Results for latest search{' '}
        <span className="results-bold">"{`${query}`}"</span>
      </p>
    )}
  </React.Fragment>
);

export default LastQuery;
