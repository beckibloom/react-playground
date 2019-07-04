import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentIndex: null
    };
    handleButtonClick = (index) => {
        // console.log('button clicked!', { index });
        this.setState({ currentIndex: index });
        this.renderContent();
    }
    renderButtons = () => {
        if (this.props.sections.length === 0) {
            return (<li></li>)
        };
        return this.props.sections.map((section, index) => (
            <li key={index} id="content">
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                <p>
                    {this.renderContent(section, index)}
                </p>
            </li>
        ))
    }
    renderContent = (section, index) => {
        // console.log(index);
        // console.log(this.state.currentIndex);
        if (index === this.state.currentIndex) {
            return section.content
        }
    }
    render() {
        return (
            <ul className="accordion">
                {this.renderButtons()}
            </ul>
        )
    }
}

export default Accordion;