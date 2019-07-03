import React from 'react';

class TheDate extends React.Component {
    // constructor method is called when an INSTANCE of a class is created
    constructor(props) {
        // always apply super(props) inside React class component constructor methods
        // we are using TheDate to include the blueprint from React.Component
        // super function is used inside classes to reach into the original blueprint
        super(props)
        // add state to the component
        // INITIALIZE state in a class component by assigning values to this.state
        this.state = {
            datetime: new Date() 
        };
    }
    componentDidMount() {
        setInterval(() => {
            // console.log('setInterval');
            this.setState({datetime: new Date()})
        }, 
        1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        // console.log('render');
        return (
            <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}

export default TheDate