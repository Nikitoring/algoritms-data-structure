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
    if (Number(line) >= 1 && Number(line) <= 100000) {
      firstLine = Number(line);
    } else {
      return
    }
  } else {
    let array = line.split(" ").map((i) => +(i));
    const bfs = (n) => {
      let obj = {}
      for (let i in array) {
        if (obj[array[i]] && obj[array[i]].length) {
          obj[array[i]].push(i)
        } else {
          obj[array[i]] = []
          obj[array[i]].push(i)
        }
      }
      let level = 0
      let root = [...obj[n]]
      while(root.length) {
        let queue = [...root]
        root = []
        if (queue.length) {
          for (let e of queue) {
            if (Array.isArray(obj[e]) && obj[e].length) {
              root.push(...obj[e])
            }
          }
        }
        level += 1
      }
      return console.log(Number(level));
    }
    bfs(-1);
  }
});
