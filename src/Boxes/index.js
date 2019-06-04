import React, { useState } from 'react';
import '../index.css';
import './index.css';
import Box from './Box';

const boxesStickTop = 50;

function Boxes({ boxes, scrollTop }) {
  const [selectedBox, setSelectedBox] = useState(undefined);

  let boxesTop = 442 + (scrollTop * .25);
  let boxesClass = '';
  if (boxesTop < scrollTop + boxesStickTop) {
    boxesTop = boxesStickTop;
    boxesClass = 'stuck';
  }

  return (
    <>
      <div
        className={`popup-background ${selectedBox !== undefined ? 'show' : ''}`}
        onClick={() => setSelectedBox(undefined)}
      />
      <div className={`colon boxes-container ${boxesClass}`} style={{ top: boxesTop }}>
        {boxes.map((item, i) => (
          <Box
            key={i}
            {...item}
            fullScreen={selectedBox === i}
            setFullscreen={state => setSelectedBox(state ? i : undefined)}
          />
        ))}
      </div>
    </>
  );
}

export default Boxes;
