import React from 'react';
import Pic from './Pic';
import NoResults from './NoResults';

const Gallery = props => {

  const results = props.data;
  let pics;
  let h2;

  if (results.length > 0) {
    h2 = 'Results';
    pics = results.map( pic => 
          <Pic url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />
        );
  } else {
    pics = <NoResults />;
    h2 = '';
  }

  
  
  return(
    <div className="main-content">
      <ul className="photo-container">
      <h2>{h2}</h2>
        {pics}
      </ul> 
    </div>
    
  );
}

export default Gallery;
