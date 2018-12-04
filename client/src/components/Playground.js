import React from 'react';

const bar = (x = 1) => {
  return x + x
}

function foo (x = 1, ...args) {
  return bar(...args) + x
}

const Playground = (props) => <div>
  <div>{foo(5)}</div>
  <div>{foo()}</div>
</div>
export default Playground