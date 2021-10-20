import React from 'react';

export default function testComponent(props) {
  return (
    <div>
      hello
      <p>
        <button onClick={props.nextStep}>Next Step</button>
      </p>
    </div>
  );
}
