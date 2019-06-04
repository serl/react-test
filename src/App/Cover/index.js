import React from 'react';
import './index.css';

function Cover({ cover, scrollTop }) {
  const coverTop = 60 + (scrollTop * .15);
  return <img className="cover" src={`${process.env.PUBLIC_URL}/${cover}`} alt="" style={{ top: coverTop }} />;
}

export default Cover;
