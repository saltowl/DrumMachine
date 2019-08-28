import * as data from '../data';

const handleKeyPress = (currentSound) => {
    return {
        type: data.HANDLE_KEY_PRESS,
        currentSound
    }
};

const playSound = (currentSound) => {
    return {
        type: data.PLAY_SOUND,
        currentSound
    }
};

const loopSound = () => {
  return {
      type: data.LOOP_SOUND
  };
};

const handleSetChange = (currentSet) => {
    return {
        type: data.HANDLE_SET_CHANGE,
        currentSet
    }
};

const handleVolumeChange = (currentVolume) => {
    return {
        type: data.HANDLE_VOLUME_CHANGE,
        currentVolume
    };
};

export const mapStateToProps = (state) => {
    return {
        data: state.rootReducer.data,
        currentSound: state.rootReducer.currentSound,
        currentSet: state.rootReducer.currentSet,
        currentVolume: state.rootReducer.currentVolume
    };
};

export const mapDispatchToProps = (dispatch) => {
    const pressedKeyClass = 'pressedKey';
    return {
        playSound: (keyName) => {
            const key = document.getElementById(keyName);

            const prevKey = document.getElementsByClassName(pressedKeyClass)[0];
            if (prevKey) {
                prevKey.classList.remove(pressedKeyClass);

                if (prevKey.id === key.id) {
                    void prevKey.offsetWidth;
                }
            }

            key.classList.add(pressedKeyClass);

            const sound = key.firstElementChild;
            sound.currentTime = 0;
            sound.play();
            dispatch(playSound(sound.id));
        },
        loopSound: (keyName) => {
            const sound = document.getElementById(keyName).firstElementChild;
            sound.loop = !sound.loop;
            dispatch(loopSound());
        },
        handleKeyPress: (event) => {
            const key = document.getElementById(String.fromCharCode(event.keyCode));
            if (key) {
                const prevKey = document.getElementsByClassName(pressedKeyClass)[0];
                if (prevKey) {
                    prevKey.classList.remove(pressedKeyClass);

                    if (prevKey.id === key.id) {
                        void prevKey.offsetWidth;
                    }
                }
                key.classList.add(pressedKeyClass);

                const sound = key.firstElementChild;
                sound.currentTime = 0;
                sound.play();
                dispatch(handleKeyPress(sound.id));
            }
        },
        handleSetChange: (set) => {
            dispatch(handleSetChange(set));
        },
        handleVolumeChange: (volumeVal) => {
            [].slice.call(document.getElementsByClassName('clip')).forEach((sound) => {
               sound.volume = volumeVal;
            });
            dispatch(handleVolumeChange(volumeVal));
        }
    };
};