import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            outcome: `Play the Roulette Gun`
        }
    }
    static defaultProps = {
        bulletInChamber: 8
    }
    renderOutcome = () => {
        // if (this.state.spinningTheChamber === true) {
        //     this.setState({
        //         outcome: 'spinning the chamber and pulling the trigger! ...'
        //     })       
        // }
        // else if (this.state.chamber === this.props.bulletInChamber) {
        //     this.setState({ outcome: 'BANG!!!!' })
        // }
        // else {
        //     this.setState({ outcome: `you're safe!` })
        // }
    }
    generateNewNumber = () => {
        let newChamber = Math.ceil(Math.random() * 8);
        this.setState({
            chamber: {newChamber},
            spinningTheChamber: false
        })
        console.log(newChamber);
        this.renderOutcome();
    }
    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true
        });
        this.renderOutcome();
        setTimeout(() => {
            this.generateNewNumber()
        },
        2000)
    }
    componentWillUnmount() {
        clearTimeout(this.interval);
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.outcome}
                </p>
                <button 
                    onClick={this.handleButtonClick}
                >
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;