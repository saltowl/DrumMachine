import React from 'react';

class PadElement extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.props.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleKeyPress);
    }
    handleClick() {
        this.props.playSound(this.props.keyName);
    }
    handleDoubleClick() {
        this.props.loopSound(this.props.keyName);
    }
    render() {
        return (
            <div className={'drum-pad col'} onClick={this.handleClick} id={this.props.keyName} onDoubleClick={this.handleDoubleClick}>
                <audio src={this.props.src} id={this.props.name} className={'clip'}/>
                {this.props.keyName}
            </div>
        );
    }
}

export default PadElement;