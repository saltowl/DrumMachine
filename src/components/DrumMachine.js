import React from 'react';
import Pad from './Pad'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div id={'drum-machine'}>
              <div id={'display'}></div>
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