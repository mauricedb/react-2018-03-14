import React from 'react';


export default ({ count, increment }) => (
  <div>
    <div>Count: {count}</div>
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  </div>
);
