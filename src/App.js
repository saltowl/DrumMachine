import React from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine'
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <DrumMachine
            data={this.props.data}
            handleKeyPress={this.props.handleKeyPress}
            playSound={this.props.playSound}
            handleSetChange={this.props.handleSetChange}
            currentSound={this.props.currentSound}
            currentSet={this.props.currentSet}
        />
    );
  }
}

export default App;
