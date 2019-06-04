import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import data from './data'
import './index.css';
import Head from './Head';
import Cover from './Cover';
import Content from './Content';
import Boxes from './Boxes';

function App({ head, cover, articles, gallery, boxes }) {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const scrollHandler = () =>
      requestAnimationFrame(() => {
        setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);
      });
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    };
  }, []);

  return (
    <div className="App">
      <Head {...head} scrollTop={scrollTop} />
      <Cover {...{ cover, scrollTop }} />
      <Content {...{ articles, gallery, boxes }} scrollTop={scrollTop} />
      <Boxes {...{ boxes, scrollTop }} />
    </div>
  );
}

ReactDOM.render(<App {...data} />, document.getElementById('root'));
