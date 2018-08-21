import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegularComponent from './RegularComponent';
import PureComponent from './PureComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topLevel: {
        deepState: 'initalValue'
      }
    }
  }

  updateDeepState = () => {
    this.setState({topLevel: {deepState: 'newValue'}});
  }

  render() {
    const { topLevel } = this.state;

    return (
      <div className="App">
        <RegularComponent topLevel={topLevel} />
        <div>
          <span>----</span>
        </div>
        <PureComponent topLevel={topLevel} />
        <button onClick={this.updateDeepState}>Update deep state</button>
      </div>
    );
  }
}

export default App;
