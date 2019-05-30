import React from 'react';
import './Gallery.css'

function Gallery({ items, level = 0 }) {
  return (
    <div className={`gallery level-${level} level-${level % 2 ? 'odd' : 'even'}`}>
      {
        items.map((item, i) => (
          Array.isArray(item) ?
            <Gallery
              key={i}
              items={item}
              level={level + 1}
            />
            :
            <img
              key={i}
              src={process.env.PUBLIC_URL + item.url}
              alt={item.alt}
            />
        ))
      }
    </div>
  );
}

export default Gallery;
