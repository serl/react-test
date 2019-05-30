import React from 'react';
import './index.css';
import Article from './Article';
import Gallery from './Gallery';
import Box from './Box';

function Content({ articles, gallery, boxes, setPopup }) {
  return (
    <div className="colon content">
      {articles.map((item, i) => (
        <Article key={i} {...item} />
      ))}
      <Gallery images={gallery} />
      <div className="boxes-container">
        {boxes.map((item, i) => (
          <Box key={i} {...item} setPopup={setPopup} />
        ))}
      </div>
    </div>
  );
}

export default Content;
