import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegularComponent from './RegularComponent';
import PureComponent from './PureComponent';


class App extends Component {
  stateToUpdate = {
    topLevel: {
      deepState: 'initalValue'
    }
  }

  updateDeepState = () => {
    this.stateToUpdate.topLevel.deepState = 'test'
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <RegularComponent state={this.stateToUpdate} />
        <div>
          <span>----</span>
        </div>
        <PureComponent state={this.stateToUpdate} />
        <button onClick={this.updateDeepState}>Update deep state</button>
      </div>
    );
  }
}

export default App;
