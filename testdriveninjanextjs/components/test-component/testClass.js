import React, { Component } from 'react';

export default class testClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        hello
        <p>
          <button onClick={this.props.nextStep}>Next Step</button>
        </p>
      </div>
    );
  }
}
