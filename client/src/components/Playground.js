import React from 'react';

const x = [1,2,3]
const y = [4,5]


const bar = (x = 1) => {
  return x + x
}

function foo (x = 1, ...args) {
  return bar(...args) + x
}

function foo1 (x,y,z,...args) {
  return [x, ...args]
}

function bar1 () {
  let a = [2,4];
  let b = [6,8,10,12]

  return foo1(...a,...b)
}

console.log(bar1().join(''))
const Playground = (props) => <div>
  <div>{foo(5)}</div>
  <div>{foo()}</div>
  <div>{[].concat(x,y,[6])}</div>
  <div>{[...x, ...y, [6]]}</div>
  <div>
    {
      bar1().join('') === '281012' ? 'true' : 'false'
    }
  </div>
</div>
export default Playground