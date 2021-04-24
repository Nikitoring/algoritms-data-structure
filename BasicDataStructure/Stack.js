// Реализовать стек с поддержкой операций push, pop и max.
// Вход. Последовательность запросов push, pop и max.
// Выход. Для каждого запроса max вывести максимальное число, находящее на стеке.

// Формата входа. Первая строка содержит число запросов q. Каждая
// из последующих q строк задаёт запрос в одном из следующих форматов: push v, pop, or max.
// Формат выхода. Для каждого запроса max выведите (в отдельной строке) текущий максимум на стеке.
// Ограничения. 1 ≤ q ≤ 400 000, 0 ≤ v ≤ 100 000.

// Пример.
// Вход:
// 3
// push 1
// push 7
// pop
// Выход:
// Выход пуст, потому что нет max запросов.

// Пример.
// Вход:
// 6
// push 7
// push 1
// push 7
// max
// pop
// max
// Выход:
// 7
// 7

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
let firstLine = null;
let stack = [];
let maxStack = [];
let counter = 0;
let max = 0;
rl.on("line", function (line) {
  if (!firstLine) {
    if (+line >= 1 && +line <= 400000) {
      firstLine = +line;
    } else {
      return;
    }
  } else {
    let parseLine = line.split(" ");
    if (parseLine[0] === "push") {
      if (max < +parseLine[1]) {
        max = +parseLine[1];
        stack.push(max);
      } else {
        stack.push(max);
      }
    }
    if (parseLine[0] === "pop") {
      if (max === stack.pop()) max = stack[stack.length - 1];
    }
    if (parseLine[0] === "max") {
      maxStack.push(max);
      if (!stack.length) return 0;
    }
    counter += 1;
    if (counter === firstLine) return console.log(maxStack.join("\n"));
  }
});
