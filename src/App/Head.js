import React from 'react';
import './index.css';
import './Head.css';

const scrollTopThreshold = 380;

function Head({ title, keywords, scrollTop }) {
  const style = {};

  if (scrollTop > scrollTopThreshold) {
    style.position = 'absolute';
    style.top = scrollTopThreshold;
  }

  return (
    <header style={style}>
      <div className="colon">
        <h1>{title}</h1>
        <ul>
          {keywords.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Head;
