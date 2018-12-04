import React from 'react';

const bar = (x = 1) => {
  return x + x
}

const foo = (x = bar(42), y = bar()) => {
  return x
}

console.log(foo(10))

const Playground = (props) => <div>
  <p>lololol</p>
  <div>{foo()}</div>
  <div>{foo(25)}</div>
</div>
export default Playground