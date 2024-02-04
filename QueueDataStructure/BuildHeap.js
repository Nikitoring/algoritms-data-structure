const buildHeap = (size, array) => {
  const logArray = [];

  const siftDown = index => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let minIndex = index;
    if (left < array.length) {
      minIndex = left;
    }
    if (right < array.length && array[right] < array[left]) {
      minIndex = right;
    }
    if (index !== minIndex && array[index] > array[minIndex]) {
      const temp = array[index];
      array[index] = array[minIndex];
      array[minIndex] = temp;
      logArray.push('' + index + ' ' + minIndex);
      siftDown(minIndex);
    }
  };
  for (let i = array.length; i >= 0; --i) {
    siftDown(i);
  }
  console.log(logArray.length);
  for (string of logArray) {
    console.log(string);
  }
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.once('line', n =>
  rl.once('line', array => {
    let nums = array.split(' ').map(i => +i);
    return buildHeap(+n, nums);
  })
);

buildHeap(6, [7, 6, 5, 4, 3, 2]);
