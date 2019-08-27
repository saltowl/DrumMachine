import {combineReducers} from 'redux';
import * as data from '../data';

function rootReducer(state = data.INITIAL_STATE, action = {}) {
    switch (action.type) {
        case data.HANDLE_KEY_PRESS:
            return state;
        case data.PLAY_SOUND:
            return state;
        default:
            return state;
    }
}

const reducers = combineReducers({rootReducer});

export default reducers;