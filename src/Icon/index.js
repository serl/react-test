import React, { useState } from 'react';

function Icon({ name, className }) {
  // probably an overkill for only 4 icons
  const [src, setSrc] = useState();
  import(`./${name}.svg`).then(l => setSrc(l.default));
  if (src)
    return <img className={className} src={src} alt={name} />;
  return null;
}

export default Icon;
