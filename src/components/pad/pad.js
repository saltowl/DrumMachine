import React, { useEffect } from 'react';
import PadElement from '../pad-element';

export default function Pad({ data, setSound, sound }) {
  const playSound = (keyName) => {
    const sound = document.getElementById(keyName).firstElementChild;
    sound.currentTime = 0;
    sound.play();
    setSound(sound.id);
  };

  const loopSound = (keyName) => {
    const sound = document.getElementById(keyName).firstElementChild;
    sound.loop = !sound.loop;
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = document.getElementById(String.fromCharCode(event.keyCode));
      if (key) {
        const sound = key.firstElementChild;
        sound.currentTime = 0;
        sound.play();
        setSound(sound.id);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setSound]);

  const pad = [];
  data.forEach(({ name, src, keyName }, i) => {
    pad.push(
      <div className={'col'} key={name}>
        <PadElement
          src={src}
          name={name}
          keyName={keyName}
          playSound={playSound}
          loopSound={loopSound}
          pressed={sound === name}
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
}
