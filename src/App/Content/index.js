import React from 'react';
import './index.css';
import Article from './Article';
import Gallery from '../Gallery';
import Box from './Box';

function Content({ articles, gallery, boxes, setPopup }) {
  return (
    <div className="parallax">
      <div className="background parallax-slow-layer"></div>
      <div className="colon content">
        {articles.map((item, i) => (
          <Article key={i} {...item} />
        ))}
        <div className="content-unit">
          <Gallery items={gallery} />
        </div>
      </div>
      <div className="colon parallax-slow-layer boxes-container">
        {boxes.map((item, i) => (
          <Box key={i} {...item} setPopup={setPopup} />
        ))}
      </div>
    </div>
  );
}

export default Content;
