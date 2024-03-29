// Максимум в скользящем окне
// Найти максимум в каждом окне размера m данного массива чисел
// A[1 . . . n].
// Вход. Массив чисел A[1 . . . n] и число 1 ≤ m ≤ n.
// Выход. Максимум подмассива A[i . . . i + m − 1] для всех 1 ≤
// i ≤ n − m + 1.

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const findMaximum = (n, nums, m) => {
  if (Number(n) > 100000 || Number(m) > Number(n)) {
    return;
  }
  const stack = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    if (stack.length && stack[0] === nums[i - m]) {
      stack.shift();
    }
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
    if (i - m + 1 >= 0) {
      result.push(stack[0]);
    }
  }
  return console.log(result.joiun(' '));
};

rl.once('line', n =>
  rl.once('line', array =>
    rl.once('line', window => {
      let nums = array.split(' ').map(i => +i);
      return findMaximum(+n, nums, +window);
    })
  )
);

// 15
// 73 65 24 14 44 20 65 97 27 6 42 1 6 41 16
// 7

// Answer:
// 73 97 97 97 97 97 97 97 42
// ------------------------------------------------------------------------------------

// 15
// 28 7 64 40 68 86 80 93 4 53 32 56 68 18 59
// 12

// Answer:
// 93 93 93 93
// ------------------------------------------------------------------------------------

// 15
// 16 79 20 19 43 72 78 33 40 52 70 79 66 43 60
// 12

// Answer:
// 79 79 79 79
// ------------------------------------------------------------------------------------

// 15
// 34 51 61 90 26 84 2 25 7 8 25 78 21 47 25
// 3

// Answer:
// 61 90 90 90 84 84 25 25 25 78 78 78 47
// ------------------------------------------------------------------------------------

// 15
// 27 83 29 77 6 3 48 2 16 72 46 38 55 2 58
// 5

// Answer:
// 83 83 77 77 48 72 72 72 72 72 58
// ------------------------------------------------------------------------------------
