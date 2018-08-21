import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import Pure from './Pure';

class CaseForUsingRegular extends Component {
  constructor(props){
    super(props);
    this.state = { items: [
      {value: {nestedValue: 'a'}},
      {value: {nestedValue: 'b'}},
      {value: {nestedValue: 'c'}}
    ]}
  }

  update = () => {
    const itemToUpdate = this.state.items[0];
    itemToUpdate.value.nestedValue = `new - ${Math.random()}`;
    const newState = [itemToUpdate].concat(this.state.items.slice(1))
    this.setState({items: newState});
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
        {this.state.items.map((valueObject, idx) => (
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
