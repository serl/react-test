import React, { useState, useEffect } from 'react';
import Head from './Head';
import Content from './Content';
import Popup from './Popup';

function App({ head, articles, gallery, boxes }) {
  const [popup, setPopup] = useState(null);
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
      {popup ?
        <Popup onClick={() => { setPopup(null) }} {...popup} />
        :
        <React.Fragment>
          <Head {...head} scrollTop={scrollTop} />
          <Content {...{ articles, gallery, boxes, setPopup }} scrollTop={scrollTop} />
        </React.Fragment>
      }
    </div>
  );
}

export default App;
