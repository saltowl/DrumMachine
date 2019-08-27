import React from 'react';
import Pad from './Pad'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div id={'drum-machine'} className={'container'}>
              <div className={'row'}>
                  <div className={'col'}>
                      <div id={'display'}>{this.props.currentSound}</div>
                  </div>
              </div>
              <Pad
                  handleKeyPress={this.props.handleKeyPress}
                  playSound={this.props.playSound}
                  data={this.props.data}
              />
          </div>
        );
    }
}

export default DrumMachine;