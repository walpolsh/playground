import React from 'react';

const foo = (x = 42) => {
  return x
}

console.log(foo(10))

const Playground = (props) => <div>
  <p>lololol</p>
  <div>{foo()}</div>
  <div>{foo(25)}</div>
</div>
export default Playground