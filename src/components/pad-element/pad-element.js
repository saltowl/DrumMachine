import React from 'react';
import './pad-element.css';

export default function PadElement({ src, name, keyName, playSound, loopSound }) {
  return (
    <div
      className={`drum-pad d-flex justify-content-center align-items-center`}
      onClick={() => playSound(keyName)}
      id={keyName}
      onDoubleClick={() => loopSound(keyName)}
    >
      <audio src={src} id={name} className={'clip'} />
      {keyName}
    </div>
  );
}
