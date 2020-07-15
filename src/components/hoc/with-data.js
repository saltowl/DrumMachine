import React from 'react';
import SoundService from '../../services/sound-service';

export default (Wrapped) => {
  return (props) => {
    const data = new SoundService().getSounds(props.presetId);
    return <Wrapped {...props} data={data} />;
  };
};
