import React from 'react';

export default function PadElement({
  src,
  name,
  keyName,
  playSound,
  loopSound,
  pressed = false,
}) {
  return (
    <div
      className={`drum-pad d-flex justify-content-center align-items-center ${
        pressed ? 'pressedKey' : ''
      }`}
      onClick={() => playSound(keyName)}
      id={keyName}
      onDoubleClick={() => loopSound(keyName)}
    >
      <audio src={src} id={name} className={'clip'} />
      {keyName}
    </div>
  );
}
