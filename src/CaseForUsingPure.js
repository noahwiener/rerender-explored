import React, { PureComponent } from 'react';
import RegularComponent from './RegularComponent';
import Pure from './Pure';

class CaseForUsingPure extends PureComponent {
  stateToUpdate = [
    {value: 'a'},
    {value: 'b'},
    {value: 'c'}
  ]

  update = () => {
    this.stateToUpdate[0].value = `new value - ${Math.random()}`
    this.forceUpdate();
  }

  render() {
    return (
      <div className="CaseForUsingPure">
        <div>
          <span>
            In this example, we are updating the value of the first item in the array. <br/>
            Both the pure and non-pure items re-render, but if you look at your console logs, <br/>
            you'll see that the non-updated pure components are not rerendering <br/>
            The pure component is only rerendering ones whose props have actually changed
          </span>
          <div>----</div>
        </div>
        {this.stateToUpdate.map((valueObject, idx) => (
          <div key={`CaseForUsingPure-${idx}`}>
            <RegularComponent state={valueObject.value} />
            <Pure state={valueObject.value} />
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

export default CaseForUsingPure;
