import React, { useState } from 'react';
import Head from './Head';
import Content from './Content';

function App({ head, articles, gallery, boxes }) {
  const [popup, setPopup] = useState(null);
  return (
    <div className="App">
      {popup ?
        <div onClick={() => { setPopup(null) }}>
          {popup.content}
        </div>
        :
        <div>
          <Head {...head} />
          <Content {...{ articles, gallery, boxes, setPopup }} />
        </div>
      }
    </div>
  );
}

export default App;
