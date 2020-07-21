import React, { useEffect, useCallback } from 'react';
import PadElement from '../pad-element';

export default React.memo(function Pad({ data, setSound }) {
  const playSound = useCallback(
    (key) => {
      if (key) {
        const sound = key.firstElementChild;
        sound.currentTime = 0;
        key.classList.add('pressed');
        sound.play();
        setTimeout(() => {
          key.classList.remove('pressed');
        }, 100);
        setSound(sound.id);
      }
    },
    [setSound],
  );

  const loopSound = (keyName) => {
    const sound = document.getElementById(keyName).firstElementChild;
    sound.loop = !sound.loop;
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = document.getElementById(String.fromCharCode(event.keyCode));
      playSound(key);
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [playSound]);

  const pad = [];
  data.forEach(({ name, src, keyName }, i) => {
    pad.push(
      <div className={'col'} key={name}>
        <PadElement
          src={src}
          name={name}
          keyName={keyName}
          playSound={(keyName) => playSound(document.getElementById(keyName))}
          loopSound={loopSound}
        />
      </div>,
    );
    if (i % 3 === 2) {
      const gap = <div className="w-100" key={name + 'gap'} />;
      pad.push(gap);
    }
  });

  return (
    <div className={'container'} id={'pad'}>
      <div className={'row'}>{pad}</div>
    </div>
  );
});
