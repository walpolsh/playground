import React from 'react';

const x = [1,2,3]
const y = [4,5]

const bar = (x = 1) => {
  return x + x
}

function foo (x = 1, ...args) {
  return bar(...args) + x
}

function waterfall (max, current) {
  if (max <= current) return;
  console.log('***'.repeat(current)) 
  waterfall(max, current+1);
}

waterfall(20,1)

function fibonacci(n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
};

let arr = []

function factoral (n) {
  if (n < 2) return 1;
  console.log(`${n} * ${n - 1}`) 
  return n * factoral(n - 1)
}

console.log(`Factoral: ${factoral(5)}`)

function fibArray(n) {
  arr.push(n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2))
  return arr
};

for (let i = 1 ; i < 20; i++) { 
  fibArray(i)
  console.log(fibonacci(i))
}
console.log(arr)

function foo1 (x,y,z,...args) {
  return [x, ...args]
}

function bar1 () {
  let a = [2,4];
  let b = [6,8,10,12]

  return foo1(...a,...b)
}

const nums = [10,5,3,8,2,6,4,7,9,1];

const bubbleSort = nums => {
  do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        const temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapped = true;
      }
    }
  } while(swapped);
  return nums
}

console.log(bubbleSort(nums))

const Playground = (props) => <div>
  <div>{foo(5)}</div>
  <div>{foo()}</div>
  <div>{[].concat(x,y,[6])}</div>
  <div>{
    [...x, ...y, [6]]
  }</div>
  <div>
    {
      bar1().join('') === '281012' ? 'true' : 'false'
    }
  </div>
  <div>
    <div>Original nums: [10,5,3,8,2,6,4,7,9,1]</div>
    <div>bubbleSort nums:</div>
    <div>
      {
        bubbleSort(nums)
      }

    </div>
  </div>
</div>
export default Playground