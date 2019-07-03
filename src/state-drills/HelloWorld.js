import React from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = { who: 'world' }
    }
    handleWorldClick = () => {
        this.setState({
            who: 'world'
        })
    }
    handleFriendClick = () => {
        this.setState({
            who: 'friend'
        })
    }
    handleReactClick = () => {
        this.setState({
            who: 'React'
        })
    }
    render() {
        return (
            <div>
                <p className="hello">Hello, {this.state.who}!</p>
                <div className="button-div">
                    <button onClick={this.handleWorldClick}>
                        World</button>
                    <button onClick={this.handleFriendClick}>
                        Friend</button>
                    <button onClick={this.handleReactClick}>
                        React</button>
                </div>
            </div>
        )
    }
}

export default HelloWorld; 