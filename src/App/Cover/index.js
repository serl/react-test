import React from 'react';
import './index.css';
import cover from './cover.png';

function Cover({ scrollTop }) {
  const coverTop = 60 + (scrollTop * .15);
  return <img className="cover" src={cover} alt="" style={{ top: coverTop }} />;
}

export default Cover;
