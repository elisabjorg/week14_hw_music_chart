import React from 'react';

const MusicSelector = (props) => {

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song['im:name'].label}</option>
  })

  return(
    <select id="music-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a song</option>
      {options}
    </select>
  )
}

export default MusicSelector;
