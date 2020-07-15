import * as constants from './constants';

export const setSound = (sound) => ({
  type: constants.SET_SOUND,
  payload: {
    sound,
  },
});

export const setPreset = (presetId) => ({
  type: constants.SET_PRESET,
  payload: {
    presetId,
  },
});

export const setVolume = (volume) => ({
  type: constants.SET_VOLUME,
  payload: {
    volume,
  },
});
