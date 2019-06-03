import React, { useState } from 'react';
import './index.css';
import Article from './Article';
import Gallery from '../Gallery';
import Box from './Box';

function Content({ articles, gallery, boxes, scrollTop }) {
  const [selectedBox, setSelectedBox] = useState(undefined);

  const contentTop = 512 - (scrollTop * .2);
  const boxesTop = 442 + (scrollTop * .1);

  return (
    <>
      <div
        className={`popup-background ${selectedBox !== undefined ? 'show' : ''}`}
        onClick={() => setSelectedBox(undefined)}
      ></div>
      <div className={`colon content content-background ${scrollTop > 430 ? 'full-width' : ''}`} style={{ top: contentTop }}></div>
      <div className="colon content" style={{ top: contentTop }}>
        {articles.map((item, i) => (
          <Article key={i} {...item} />
        ))}
        <div className="content-unit">
          <Gallery items={gallery} />
        </div>
      </div>
      <div className={`colon boxes-container ${boxesTop < scrollTop + 50 ? 'stuck' : ''}`} style={{ top: boxesTop }}>
        {boxes.map((item, i) => (
          <Box key={i} {...item} fullScreen={selectedBox === i} setFullscreen={state => setSelectedBox(state ? i : undefined)} />
        ))}
      </div>
    </>
  );
}

export default Content;
