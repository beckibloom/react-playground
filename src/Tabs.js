import React from 'react';

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    };
    handleButtonClick = (index) => {
        console.log('button clicked!', { index })
        this.setState({ currentTabIndex: index })
        console.log(this.state);
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div>
            {currentTab.content}
          </div>
        )
    }
    render() {
        return (
          <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
}

export default Tabs;