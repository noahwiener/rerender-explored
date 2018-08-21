import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import Pure from './Pure';

class CaseForUsingRegular extends Component {
  stateToUpdate = [
    {value: {nestedValue: 'a'}},
    {value: {nestedValue: 'b'}},
    {value: {nestedValue: 'c'}}
  ]

  update = () => {
    this.stateToUpdate[0].value.nestedValue = `new - ${Math.random()}`
    this.forceUpdate();
  }

  render() {
    return (
      <div className="CaseForUsingRegular">
        <div>
          <span>
            In this example, we are updating the nested value of the first item in the array. <br/>
            As you see in the console logs, the pure component version does not rerender
          </span>
          <div>----</div>
        </div>
        {this.stateToUpdate.map((valueObject, idx) => (
          <div key={`CaseForUsingRegular-${idx}`}>
            <RegularComponent state={valueObject} />
            <Pure state={valueObject} />
            <div>
              <span>----</span>
            </div>
          </div>
        ))}
        <button onClick={this.update}>Update The first item in the list</button>
      </div>
    );
  }
}

export default CaseForUsingRegular;
