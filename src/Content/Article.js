import React from 'react';
import './index.css';
import './Article.css';
import Icon from '../Icon';

function Article({ head, title, content, author }) {
  return (
    <article className="content-unit">
      <h3>{head}</h3>
      <h2>{title}</h2>
      <p>{content}</p>
      <hr />
      <div className="icons">
        <Icon name="flame" />
        <Icon name="roll" />
        <Icon name="drop" />
      </div>
      <div className="author">
        <img src={author.image} alt="" />
        {author.name}
      </div>
    </article>
  );
}

export default Article;
