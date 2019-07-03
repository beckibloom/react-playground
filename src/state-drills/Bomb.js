import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            display: '(Bomb)'
        };
    }
    countResponse = () => {
        if (this.state.count >= 8) {
            this.setState({
                display: 'BOOM!!!'
            });
            this.componentWillUnmount();
        }
        else if (this.state.count % 2) {
            this.setState({
                display: 'tick...'
            })
        }
        else {
            this.setState({
                display: 'tock...'
            })
        }
    }
    componentDidMount() {
        // console.log('componentDidMount');
        setInterval(() => {
            this.setState({count: this.state.count + 1})
            this.countResponse();
        }, 
        1000)
    }
    componentWillUnmount() {
        // console.log('componentWillUnmount');
        clearInterval(this.interval);
        this.setState({
            count:0,
            display: 'BOOM!!!'
        })
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.display}
                </p>
            </div>
        )
    }
}

export default Bomb;