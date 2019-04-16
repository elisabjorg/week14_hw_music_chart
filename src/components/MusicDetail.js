import React from 'react';

const MusicDetail = (props) => {
  if (!props.song) return null;
  return (
    <div>
    <h3>Title: {props.song['im:name'].label}</h3>
    <h4>Artist: {props.song['im:artist'].label}</h4>
    <h4>Chart position: Unknown </h4>
    <img src={props.song['im:image'][2]['label']} height="120px" width="120px" />
    </div>
  );
}

export default MusicDetail;
