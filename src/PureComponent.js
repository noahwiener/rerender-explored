import React, { PureComponent } from 'react';

class Pure extends PureComponent {
  render() {
    console.log('rendering pure component with props', this.props.value);
    return (
      <div>
        <span>Pure:</span><br/>
        <span>My props are {JSON.stringify(this.props, null, 2)}</span>
      </div>
    );
  }
}

export default Pure;