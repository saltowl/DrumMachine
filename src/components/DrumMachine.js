import React from 'react';
import Pad from './Pad';
import {KEYS_NUMBER} from '../data';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.handleSetChange = this.handleSetChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    handleSetChange(event) {
        this.props.handleSetChange(event.target.value);
    }

    handleVolumeChange(event) {
        this.props.handleVolumeChange(event.target.value);
    }

    updateDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        const startSetIndex = this.props.currentSet * KEYS_NUMBER;
        const currentData = this.props.data.slice(startSetIndex, startSetIndex + KEYS_NUMBER);

        const gridClasses = this.state.width <= 550 ? [
            'row row__C', 'row row__A', 'row row__B', 'col wrapper', 'col'
        ] : [
            'col', 'col', 'col', 'row', 'row'
        ];
        return (
            <div id={'drum-machine'} className={'container'}>
                <h1 className={'text-center'}>Double click on any pad element loops sound</h1>
                <div className={gridClasses[3]}>
                    <div className={gridClasses[0]}>
                        <Pad
                            handleKeyPress={this.props.handleKeyPress}
                            playSound={this.props.playSound}
                            loopSound={this.props.loopSound}
                            data={currentData}
                        />
                    </div>
                    <div className={gridClasses[1]}>
                        <div className={'container w-100'}>
                            <div id={'display'} className={'d-flex justify-content-center align-items-center'}>{this.props.currentSound}</div>
                        </div>
                    </div>
                    <div className={gridClasses[2]}>
                        <div className={gridClasses[4]}>
                            <div id={'volume'}>
                                <label htmlFor="formControlRange">Volume</label>
                                <input type="range" className="form-control-range" id="formControlRange" min={0} max={1}
                                       step={0.01} value={this.props.currentVolume} onChange={this.handleVolumeChange}/>
                            </div>
                        </div>
                        <div className={gridClasses[4]}>
                            <div id={'set'}>
                                <select className="custom-select" id={'set-selector'}
                                        onChange={this.handleSetChange}>
                                    <option value="0">First set</option>
                                    <option value="1">Second set</option>
                                    <option value="2">Third set</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine;