import React from 'react';

class PadElement extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
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
    render() {
        return (
            <div className={'drum-pad col'} onClick={this.handleClick} id={this.props.keyCode}>
                <audio src={this.props.src} id={this.props.keyName} className={'clip'}/>
                {this.props.keyName}
            </div>
        );
    }
}

export default PadElement;