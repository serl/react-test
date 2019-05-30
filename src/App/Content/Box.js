import React from 'react';
import './Box.css'

function Box({ number, icon, title, content, action, setPopup }) {
  return (
    <div className="box">
      <div className="number">{number}</div>
      {icon && <img className="icon" src={`/icons/${icon}.svg`} alt={icon} />}
      <h2>{title}</h2>
      <div className="box-content">
        <p>{content}</p>
        {action && <button onClick={() => setPopup({ content })}>{action}</button>}
      </div>
    </div>
  );
}

export default Box;
