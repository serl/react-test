import React from 'react';

function Gallery({ images }) {
  return (
    <ul>
      {images.map((item, i) => (
        <li key={i}><img src={process.env.PUBLIC_URL + item.url} alt={item.alt} /></li>
      ))}
    </ul>
  );
}

export default Gallery;
