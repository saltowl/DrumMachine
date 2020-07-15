import * as constants from './constants';

export default (state = constants.INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case constants.SET_PRESET: {
      const { presetId } = action.payload;
      return {
        ...state,
        presetId,
      };
    }

    case constants.SET_SOUND: {
      const { sound } = action.payload;
      return {
        ...state,
        sound,
      };
    }

    case constants.SET_VOLUME: {
      const { volume } = action.payload;
      return {
        ...state,
        volume,
      };
    }

    default: {
      return { ...state };
    }
  }
};
