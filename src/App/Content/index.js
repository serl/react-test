import React from 'react';
import './index.css';
import Article from './Article';
import Gallery from '../Gallery';
import Box from './Box';

function Content({ articles, gallery, boxes, setPopup, scrollTop }) {

  return (
    <>
      <div className="colon content" style={{ top: 512 - (scrollTop * .2) }}>
        {articles.map((item, i) => (
          <Article key={i} {...item} />
        ))}
        <div className="content-unit">
          <Gallery items={gallery} />
        </div>
      </div>
      <div className="colon boxes-container" style={{ top: 442 + (scrollTop * .1) }}>
        {boxes.map((item, i) => (
          <Box key={i} {...item} setPopup={setPopup} />
        ))}
      </div>
    </>
  );
}

export default Content;
