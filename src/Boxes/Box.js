import React from 'react';
import './Box.css'
import Icon from '../Icon'
import Gallery from '../Gallery';

function Box({ number, icon, title, content, action, gallery, fullScreen, setFullscreen }) {
  return (
    <div className={`box ${fullScreen ? 'box-fullscreen' : ''}`} onClick={() => fullScreen && setFullscreen(false)}>
      <div className="box-small">
        <div className="number">{number}</div>
        {icon && <Icon name={icon} className="icon" />}
        <h2>{title}</h2>
        <div className="box-content">
          <p>{content}</p>
          {action && <button onClick={() => setFullscreen(true)}>{action}</button>}
        </div>
      </div>
      {action && gallery &&
        <div className="box-big">
          <div className="box-big-top">
            <p>{content}</p>
          </div>
          <div className="box-big-bottom">
            <div className="gallery-container">
              <Gallery items={gallery} responsive={false} />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Box;
