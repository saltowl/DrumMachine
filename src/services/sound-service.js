export default class SoundService {
  _allSounds = [
    'Bass Drum 1',
    'Bass Drum 2',
    'Bass Drum 3',
    'Boom Kick',
    'Deep Kick',
    'E-Mu Proteus FX 909 Kick',
    'E-Mu Proteus FX Wacky Kick',
    'Electronic Kick 1',
    'Electronic Kick 2',
    '1980s Casio Piano C5',
    'Alesis Fusion Bright Acoustic Piano C6',
    'Casio MT-45 Piano C4',
    'E-Mu Proteus FX Pianotar C3',
    'Ensoniq ESQ-1 Piano C3',
    'Alesis Fusion Nylon String Guitar C4',
    'Ensoniq SQ-1 ClassicGuitar C5',
    'Kawai K5000W NylonGt1 C4',
    'Kawai K5000W SteelGt1 C3',
    'Crash Cymbal 1',
    'Crash Cymbal 5',
    'Closed Hi-Hat 2',
    'Ensoniq SQ-1 Open Hi-Hat',
    'Ensoniq SQ-1 Ride Cymbal',
    'Claves',
    'Alesis Fusion Recorder C5',
    'Electro Tom',
    'Alesis Fusion English Horn C5',
  ];
  _keyNames = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  _KEYS_NUMBER = this._keyNames.length;

  _createPadData = (keyName, name) => ({
    keyName,
    name,
    src: `https://freewavesamples.com/files/${name.replace(/[ ]/g, '-')}.wav`,
  });

  getSounds = (presetId = 0) =>
    this._keyNames.map((keyName, i) =>
      this._createPadData(keyName, this._allSounds[this._KEYS_NUMBER * presetId + i]),
    );
}
