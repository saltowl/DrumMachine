import React from 'react';
import Pad from './Pad';
import {KEYS_NUMBER} from '../data'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        this.handleSetChange = this.handleSetChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }
    handleSetChange(event) {
        this.props.handleSetChange(event.target.value);
    }
    handleVolumeChange(event) {
        this.props.handleVolumeChange(event.target.value);
    }
    render() {
        const startSetIndex = this.props.currentSet * KEYS_NUMBER;
        const currentData = this.props.data.slice(startSetIndex, startSetIndex + KEYS_NUMBER);
        return (
          <div id={'drum-machine'} className={'container'}>
              <div className={'row'}>
                  <div className={'col'}>
                      <div id={'display'}>{this.props.currentSound}</div>
                  </div>
                  <div className={'col'}>
                      <select className="mdb-select md-form" id={'set-selector'} onChange={this.handleSetChange}>
                          <option value="0">Set0</option>
                          <option value="1">Set1</option>
                          <option value="2">Set2</option>
                      </select>
                  </div>
                  <div className={'col'}>
                      <label htmlFor="formControlRange">Volume</label>
                      <input type="range" className="form-control-range" id="formControlRange" min={0} max={1}
                             step={0.01} value={this.props.currentVolume} onChange={this.handleVolumeChange}/>
                  </div>
              </div>
              <Pad
                  handleKeyPress={this.props.handleKeyPress}
                  playSound={this.props.playSound}
                  data={currentData}
              />
          </div>
        );
    }
}

export default DrumMachine;