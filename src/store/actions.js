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

const handleSetChange = (currentSet) => {
    return {
        type: data.HANDLE_SET_CHANGE,
        currentSet
    }
}

export const mapStateToProps = (state) => {
    return {
        data: state.rootReducer.data,
        currentSound: state.rootReducer.currentSound,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        playSound: (keyName) => {
            const sound = document.getElementById(keyName).firstElementChild;
            sound.currentTime = 0;
            sound.play();
            dispatch(playSound(sound.id));
        },
        handleKeyPress: (event) => {
            const parEl = document.getElementById(String.fromCharCode(event.keyCode));
            if (parEl) {
                const sound = parEl.firstElementChild;
                sound.currentTime = 0;
                sound.play();
                dispatch(handleKeyPress(sound.id));
            }
        },
        }
    };
};