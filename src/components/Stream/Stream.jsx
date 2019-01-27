import React from 'react';
import { connect } from 'react-redux';

function Stream({ tracks = [] }) {
  return (
    <div>
      {tracks.map((track, key) => {
        return (
          <div className="track" key={key}>
            {track.title}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = ({ tracks }) => ({ tracks });

export default connect(
  mapStateToProps,
  null
)(Stream);
