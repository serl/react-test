import React from 'react';

function Head({ title, keywords }) {
  return (
    <header>
      <h1>{title}</h1>
      <ul>
        {keywords.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </header>
  );
}

export default Head;
