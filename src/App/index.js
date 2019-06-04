import React, { useState, useEffect } from 'react';
import './index.css';
import Head from './Head';
import Content from './Content';

function App({ head, articles, gallery, boxes }) {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const scrollHandler = () =>
      requestAnimationFrame(() => {
        setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);
      });
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    };
  }, []);

  return (
    <div className="App">
      <Head {...head} scrollTop={scrollTop} />
      <Content {...{ articles, gallery, boxes }} scrollTop={scrollTop} />
    </div>
  );
}

export default App;
