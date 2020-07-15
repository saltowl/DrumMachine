import React, { useState, useEffect } from 'react';
import Pad from '../pad';

export default function DrumMachine({ data, sound, volume, setPreset, setVolume }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateVolume = (e) => {
    const volume = e.target.value;
    for (const clip of document.getElementsByClassName('clip')) {
      clip.volume = volume;
    }
    setVolume(volume);
  };

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const gridClasses =
    width <= 550
      ? ['row row__C', 'row row__A', 'row row__B', 'col wrapper', 'col']
      : ['col', 'col', 'col', 'row', 'row'];

  return (
    <div id={'drum-machine'} className={'container'}>
      <h1 className={'text-center'}>Double click on any pad element loops sound</h1>
      <div className={gridClasses[3]}>
        <div className={gridClasses[0]}>
          <Pad data={data} />
        </div>
        <div className={gridClasses[1]}>
          <div className={'container w-100'}>
            <div
              id={'display'}
              className={'d-flex justify-content-center align-items-center'}
            >
              {sound}
            </div>
          </div>
        </div>
        <div className={gridClasses[2]}>
          <div className={gridClasses[4]}>
            <div id={'volume'}>
              <label htmlFor="formControlRange">Volume</label>
              <input
                type="range"
                className="form-control-range"
                id="formControlRange"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={updateVolume}
              />
            </div>
          </div>
          <div className={gridClasses[4]}>
            <div id={'set'}>
              <select
                className="custom-select"
                id={'set-selector'}
                onChange={(e) => setPreset(e.target.value)}
              >
                <option value="0">First set</option>
                <option value="1">Second set</option>
                <option value="2">Third set</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
