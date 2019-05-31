import React from 'react';
import './Box.css'
import Gallery from '../Gallery';

function Box({ number, icon, title, content, action, gallery, fullScreen, setFullscreen }) {
  return (
    <div className={`box ${fullScreen ? 'box-fullscreen' : ''}`} onClick={() => fullScreen && setFullscreen(false)}>
      <div className="box-small">
        <div className="number">{number}</div>
        {icon && <img className="icon" src={`/icons/${icon}.svg`} alt={icon} />}
        <h2>{title}</h2>
        <div className="box-content">
          <p>{content}</p>
          {action && <button onClick={() => setFullscreen(true)}>{action}</button>}
        </div>
      </div>
      <div className="box-big">
        <div className="box-top">
          <p>{content}</p>
        </div>
        <div className="box-bottom">
          {gallery && <Gallery items={gallery} />}
        </div>
      </div>
    </div>
  );
}

export default Box;
