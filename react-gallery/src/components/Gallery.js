import React from 'react';
import Pic from './Pic';

const Gallery = props => {

  const results = props.data;
  let pics = results.map( pic => 
      <Pic url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />
    );
  
  return(
    <ul className="photo-container">
    <h2>Results</h2>
      {pics}
    </ul> 
  );
}

export default Gallery;
