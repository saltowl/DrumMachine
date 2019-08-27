function CreatePadData(keyName, name) {
    return {
        keyName,
        name,
        src: 'https://freewavesamples.com/files/' + name.replace(/[ ]/g, '-') + '.wav'
    };
}

export const KEYS_NUMBER = 9;
const allSounds = ['Bass Drum 1', 'Bass Drum 2', 'Bass Drum 3', 'Boom Kick', 'Deep Kick', 'E-Mu Proteus FX 909 Kick', 'E-Mu Proteus FX Wacky Kick', 'Electronic Kick 1', 'Electronic Kick 2',
'1980s Casio Piano C5', 'Alesis Fusion Bright Acoustic Piano C6', 'Casio MT-45 Piano C4', 'E-Mu Proteus FX Pianotar C3', 'Ensoniq ESQ-1 Piano C3', 'Alesis Fusion Nylon String Guitar C4', 'Ensoniq SQ-1 ClassicGuitar C5', 'Kawai K5000W NylonGt1 C4', 'Kawai K5000W SteelGt1 C3'];
const keyNames = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const padData = [];
for (let i = 0; i < allSounds.length / KEYS_NUMBER; i++) {
    for (let j = 0; j < KEYS_NUMBER; j++) {
        padData.push(CreatePadData(keyNames[j], allSounds[KEYS_NUMBER * i + j]));
    }
}

export const INITIAL_STATE = {
    'rootReducer': {
        'data': padData,
        'currentSound': '',
        'currentSet': 0,
        'currentVolume': 0.2
    }
};

export const PLAY_SOUND = 'PLAY_SOUND';
export const HANDLE_KEY_PRESS = 'HANDLE_KEY_PRESS';
export const HANDLE_SET_CHANGE = 'HANDLE_SET_CHANGE';
export const HANDLE_VOLUME_CHANGE = 'HANDLE_VOLUME_CHANGE';