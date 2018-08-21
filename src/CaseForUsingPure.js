import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import PureComponent from './PureComponent';

class CaseForUsingPure extends Component {
  stateToUpdate = [
    {value: 'a'},
    {value: 'b'},
    {value: 'c'}
  ]

  update = () => {
    this.stateToUpdate[0].value = 'new value'
    this.forceUpdate();
  }

  render() {
    return (
      <div className="CaseForUsingPure">
        {this.stateToUpdate.map((valueObject, idx) => (
          <div key={idx}>
            <RegularComponent state={valueObject} />
            <div>
              <span>----</span>
            </div>
            <PureComponent state={valueObject} />
            <div>
              <span>----</span>
            </div>
          </div>
        ))}
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}

export default CaseForUsingPure;
