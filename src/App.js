import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CaseForUsingRegular from './CaseForUsingRegular';
import CaseForUsingPure from './CaseForUsingPure';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'CaseForUsingRegular' }
  }

  toggle = () => {
    if (this.state.type = 'caseForUsingRegular') {
      return this.setState({type: 'caseForUsingPure'})
    }
    return this.setState({ type: 'caseForUsingRegular'})
  }

  render() {
    const appToRender = this.state.caseForUsingRegular ?
      <CaseForUsingRegular /> :
      <CaseForUsingPure />

    return (
      <div className="App">
        {appToRender}
        <div>
          <button onClick={this.toggle}>Toggle type</button>
        </div>
      </div>
    );
  }
}

export default App;
