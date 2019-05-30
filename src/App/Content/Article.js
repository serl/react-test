import React from 'react';
import './Article.css';

function Article({ head, title, content, author }) {
  return (
    <article>
      <h3>{head}</h3>
      <h2>{title}</h2>
      <p>{content}</p>
      <hr />
      <div className="icons">
        <img src={"/icons/flame.svg"} alt="flame" />
        <img src={"/icons/roll.svg"} alt="roll" />
        <img src={"/icons/drop.svg"} alt="drop" />
      </div>
      <div className="author">
        <img src={author.image} alt="" />
        {author.name}
      </div>
    </article>
  );
}

export default Article;
