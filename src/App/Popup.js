import React from 'react';
import './Popup.css'
import Gallery from './Gallery';

function Popup({ content, gallery, onClick }) {
  return (
    <React.Fragment>
      <div className="popup-background" onClick={onClick}></div>
      <div className="popup" onClick={onClick}>
        <div className="top">
          <p>{content}</p>
        </div>
        <div className="bottom">
          <Gallery items={gallery} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Popup;
