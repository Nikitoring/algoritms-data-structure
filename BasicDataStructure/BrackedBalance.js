// Скобки в коде
// Проверить, правильно ли расставлены скобки в данном коде.
// Вход. Исходный код программы.
// Выход. Проверить, верно ли расставлены скобки. Если нет, выдать индекс первой ошибки.
// Формат входа. Строка s[1 . . . n], состоящая из заглавных и прописных букв латинского алфавита, цифр, знаков препинания и скобок из множества []{}().
// Формат выхода. Если скобки в s расставлены правильно, выведите
// строку “Success". В противном случае выведите индекс (используя индексацию с единицы) первой закрывающей скобки, для которой нет соответствующей открывающей. Если такой нет,
// выведите индекс первой открывающей скобки, для которой нет соответствующей закрывающей.
// Ограничения. 1 ≤ n ≤ 105.



var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let stack = [];
  let close = [")", "]", "}"];
  let open = ["(", "[", "{"];
  for (let i in line) {
    let char = line[i];
    let openIndex = open.indexOf(char);
    let closeIndex = close.indexOf(char);
    // Проверяем открывающуюся скобку и добавляем в стек
    if (openIndex !== -1) {
      stack.push({
        type:char,
        index: Number(i) + 1
      });
      continue;
    }
    // Проверяем закрывающуюся скобку
    if (closeIndex !== -1) {
      // Если скобка закрывающая а стек пустой то возвращаем индекс
      if (!stack.length) {
        return console.log(Number(i) + 1);
      }
      // Последняя скобка в стеке совпадает с индексом закртой скобки то удалеям ее из стека
      // иначе возвращаем индекс ошибочной скобки
      if (stack[stack.length - 1].type === open[closeIndex]) {
        stack.pop();
      } else {
        return console.log(Number(i) + 1);
      }
    }
  }
  if (stack.length >= 1) return console.log(stack[stack.length - 1].index);
  if (!stack.length) return console.log("Success");
});


//! TESTS
// successTest("  sdsd  ")
// 	successTest("foo(bar);")

	// opening
// 	failTest("[]([];", 3)
// 	failTest("({[", 3)
// 	failTest("({{}", 2)
// 	failTest("{", 1)
// 	failTest("{[]", 1)
// 	failTest("{{{", 3)
// 	failTest("[]([]", 3)
// 	failTest("{{{[][][]", 3)
// 	failTest("{{{{{{{((()))}", 6)
// 	failTest("{()}{", 5)

	// closing
// 	failTest("}()", 1)
// 	failTest("()}()", 3)
// 	failTest("}()", 1)
// 	failTest("{[()]}}()", 7)
// 	failTest("dasdsadsadas]]]", 13)

 	// success
// 	successTest("{}()")
// 	successTest("({}[(((())))])")
// 	successTest("()")
// 	successTest("({})")
// 	successTest("foo(bar({ <some initialization> })[i]);")

// 	// from stepic
// 	successTest("([](){([])})")
// 	failTest("()[]}", 5)
// 	failTest("{{[()]]", 7)
// 	failTest("{{{[][][]", 3)
// 	failTest("{*{{}", 3)
// 	failTest("[[*", 2)
// 	failTest("{{", 2)
// 	failTest("{{{**[][][]", 3)