import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CaseForUsingRegular from './CaseForUsingRegular';
import CaseForUsingPure from './CaseForUsingPure';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'Regular' }
  }

  toggle = () => {
    if (this.state.type === 'Regular') {
      return this.setState({type: 'Pure'})
    }
    return this.setState({ type: 'Regular'})
  }

  render() {
    const appToRender = this.state.type === 'Regular' ?
      <CaseForUsingRegular /> :
      <CaseForUsingPure />;

    return (
      <div className="App">
        <h2>Here's the case for using {this.state.type} Components</h2>
        <div>
          <span>Check out the other use case by toggling type here (maybe clear your console first):</span>
          <button onClick={this.toggle}>Toggle type</button>
        </div>
        <br />
        {appToRender}
        <div><span>Because this is an example for jr coffee, you have to reload the page if you want to click the update button multiple times</span></div>
      </div>
    );
  }
}

export default App;
