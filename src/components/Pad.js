import React from 'react';
import PadElement from './PadElement';

class Pad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const pad = [];
        this.props.data.forEach((obj, i) => {
            let element = (
                <div className={'col'} key={obj.name}>
                    <PadElement
                        src={obj.src}
                        name={obj.name}
                        keyName={obj.keyName}
                        handleKeyPress={this.props.handleKeyPress}
                        playSound={this.props.playSound}
                        loopSound={this.props.loopSound}
                    />
                </div>
            );
            pad.push(element);
            if (i % 3 === 2) {
                const gap = (<div className="w-100" key={obj.name + 'gap'}/>);
                pad.push(gap);
            }
        });

        return (
            <div className={'container'} id={'pad'}>
                <div className={'row'}>
                    {pad}
                </div>
            </div>
        );
    }
}

export default Pad;