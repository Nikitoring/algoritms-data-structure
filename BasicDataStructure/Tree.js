// Высота дерева
// Вычислить высоту данного дерева.
// Вход. Корневое дерево с вершинами {0, . . . , n−1}, заданное
// как последовательность parent0, . . . , parentn−1, где parenti —родитель i-й вершины.
// Выход. Высота дерева.

// Формата входа. Первая строка содержит натуральное число n.
// Вторая строка содержит n целых неотрицательных чисел
// parent0, . . . , parentn−1. Для каждого 0 ≤ i ≤ n − 1, parenti —родитель вершины i; если parenti = −1, то i является корнем.
// Гарантируется, что корень ровно один. Гарантируется, что данная последовательность задаёт дерево.
// Формат выхода. Высота дерева.
// Ограничения. 1 ≤ n ≤ 105.

// Пример.
// Вход:
// 5
// 4 -1 4 1 1
// Выход:
// 3
// корень 1
//      /   \
//     3     4
//          /  \
//         0    2
// ------------------
// Вход: 9 7 5 5 2 9 9 9 2 -1
// Выход 4
//             9
//          / / \  \
//         0  5  6  7
//           / \     \
//          2   3     1
//         /  \
//        8    4

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let firstLine = null;
rl.on("line", function (line) {
  // Заносим длину элементов
  if (!firstLine) {
    if (Number(line) >= 1 && Number(line) <= 105) {
      firstLine = Number(line);
    }
  } else {
    let array = line.split(" ").map((i) => Number(i));

    const bfs = (n) => {

      let queue = []
      let value = 0
      let obj = {}
      queue.push(n)
      for (let i in array) {
        obj[array[i]] = array.map((e, index) => e === Number(i) ? index: 'empty').filter(x=> x !== 'empty')
      }
      console.log('obj', obj);
      // let filtArr = array.map((i, index) => i === queue[0] ? index: 'empty').filter(x=> x !== 'empty')
      // while(queue.length > 0) {
        
      //   queue.shift()
      //   value +=1
      //   // let filtArr = array.indexOf(temp)
      //   if (filtArr.length) {
      //     queue.push(...filtArr)
      //     console.log('queue', queue);
      //   }
      // }
      return console.log(value);
    }
    bfs(-1);
  }
});
