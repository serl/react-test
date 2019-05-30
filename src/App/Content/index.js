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
      {boxes.map((item, i) => (
        <Box key={i} {...item} setPopup={setPopup} />
      ))}
    </div>
  );
}

export default Content;
