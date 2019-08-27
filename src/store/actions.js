import * as data from '../data';

const handleKeyPress = (event) => {
    return {
        type: data.HANDLE_KEY_PRESS,
        event
    }
};

const playSound = (key) => {
    return {
        type: data.PLAY_SOUND,
        key
    }
};

export const mapStateToProps = (state) => {
    return {
        data: state.rootReducer.data
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        playSound: (key) => {
            const sound = document.getElementById(key);
            sound.currentTime = 0;
            sound.play();
            dispatch(playSound(key));
        },
        handleKeyPress: (event) => {
            dispatch(handleKeyPress(event));
        }
    };
};