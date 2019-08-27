import {combineReducers} from 'redux';
import * as data from '../data';

function rootReducer(state = data.INITIAL_STATE, action = {}) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case data.HANDLE_KEY_PRESS:
        case data.PLAY_SOUND:
            newState.currentSound = action.currentSound;
            return newState;
        default:
            return state;
    }
}

const reducers = combineReducers({rootReducer});

export default reducers;