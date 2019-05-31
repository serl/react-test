import React, { useState } from 'react';
import Head from './Head';
import Content from './Content';
import Popup from './Popup';

function App({ head, articles, gallery, boxes }) {
  const [popup, setPopup] = useState(null);
  return (
    <div className="App">
      {popup ?
        <Popup onClick={() => { setPopup(null) }} {...popup} />
        :
        <React.Fragment>
          <Head {...head} />
          <Content {...{ articles, gallery, boxes, setPopup }} />
        </React.Fragment>
      }
    </div>
  );
}

export default App;
