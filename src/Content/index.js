import React from 'react';
import '../index.css';
import './index.css';
import Article from './Article';
import Gallery from '../Gallery';

function Content({ articles, gallery, scrollTop }) {
  return (
    <>
      <div className={`colon content content-background ${scrollTop > 430 ? 'full-width' : ''}`}></div>
      <div className="colon content">
        {articles.map((item, i) => (
          <Article key={i} {...item} />
        ))}
        <div className="content-unit">
          <Gallery items={gallery} />
        </div>
      </div>
    </>
  );
}

export default Content;
