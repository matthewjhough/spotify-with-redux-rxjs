// import React from 'react';
import { connect } from 'react-redux';
import Stream from './Stream.jsx';

function mapStateToProps({ tracks }) {
  return {
    tracks
  };
}

export default connect(mapStateToProps)(Stream);
