import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    static defaultProps = {
        step: 1
    };
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props);
        console.log('state in handleButtonClick', this.state);
        this.setState({
            count: this.state.count + this.props.step
        })
    }
    render() {
        return (
            <div>
            <p>The current count: {this.state.count}</p>
            <button
                onClick={this.handleButtonClick}>
                Add {this.props.step}
            </button>
            </div>
            )
    }
}

export default Counter;


// Here's a quick challenge for you:

// Make a number prop called step. The step prop can control how much we add to the count each time the button is clicked. Don't forget to setup a default (static defaultProps) for the step prop with the number 1.

