import React from 'react';

function Box({ number, icon, title, content, action, setPopup }) {
  return (
    <div>
      {number}
      {icon && <img src={`/icons/${icon}.svg`} alt={icon} />}
      <h2>{title}</h2>
      {content}
      {action && <button onClick={() => setPopup({ content })}>{action}</button>}
    </div>
  );
}

export default Box;
