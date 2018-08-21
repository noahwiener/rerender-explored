import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import PureComponent from './PureComponent';

class CaseForUsingRegular extends Component {
  stateToUpdate = [
    {value: {nestedValue: 'a'}},
    {value: {nestedValue: 'b'}},
    {value: {nestedValue: 'c'}}
  ]

  update = () => {
    this.stateToUpdate[0].value = 'new value'
    this.forceUpdate();
  }

  render() {
    return (
      <div className="CaseForUsingRegular">
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

export default CaseForUsingRegular;
