import React from 'react';
import './Head.css'

function Head({ title, keywords }) {
  return (
    <header>
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
