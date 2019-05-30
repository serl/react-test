import React from 'react';

function Article({ head, title, content, author }) {
  return (
    <div>
      <p>{head}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={author.image} alt="" />
      {author.name}
    </div>
  );
}

export default Article;
