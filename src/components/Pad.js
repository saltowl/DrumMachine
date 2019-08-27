import React from 'react';
import PadElement from './PadElement';

class Pad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const gap = (<div className="w-100" />);
        const pad = [];
        this.props.data.forEach((obj, i) => {
            let element = (
                <PadElement
                    src={obj.src}
                    name={obj.name}
                    keyName={obj.keyName}
                    handleKeyPress={this.props.handleKeyPress}
                    playSound={this.props.playSound}
                />
            );
            pad.push(element);
            if (i % 3 === 2) {
                pad.push(gap);
            }
        });

        return (
            <div className={'container'}>
                <div className={'row'}>
                    {pad}
                </div>
            </div>
        );
    }
}

export default Pad;