import React from 'react';
import './results.css';

class Results extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    const { query } = this.props;
    return (
      <div className="results">
        <p>
          Results for latest search{' '}
          <span className="results-bold">"{query}"</span>
        </p>
      </div>
    );
  }
}

export default Results;
