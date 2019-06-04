import React, { useState } from 'react';
import '../index.css';
import './index.css';
import cover from './cover.png';
import Article from './Article';
import Gallery from '../Gallery';
import Box from './Box';

const boxesStickTop = 50;

function Content({ articles, gallery, boxes, scrollTop }) {
  const [selectedBox, setSelectedBox] = useState(undefined);

  const coverTop = 60 + (scrollTop * .15);
  let boxesTop = 442 + (scrollTop * .25);
  let boxesClass = '';
  if (boxesTop < scrollTop + boxesStickTop) {
    boxesTop = boxesStickTop;
    boxesClass = 'stuck';
  }

  return (
    <>
      <img className="cover" src={cover} alt="" style={{ top: coverTop }} />
      <div
        className={`popup-background ${selectedBox !== undefined ? 'show' : ''}`}
        onClick={() => setSelectedBox(undefined)}
      ></div>
      <div className={`colon content content-background ${scrollTop > 430 ? 'full-width' : ''}`}></div>
      <div className="colon content">
        {articles.map((item, i) => (
          <Article key={i} {...item} />
        ))}
        <div className="content-unit">
          <Gallery items={gallery} />
        </div>
      </div>
      <div className={`colon boxes-container ${boxesClass}`} style={{ top: boxesTop }}>
        {boxes.map((item, i) => (
          <Box key={i} {...item} fullScreen={selectedBox === i} setFullscreen={state => setSelectedBox(state ? i : undefined)} />
        ))}
      </div>
    </>
  );
}

export default Content;
