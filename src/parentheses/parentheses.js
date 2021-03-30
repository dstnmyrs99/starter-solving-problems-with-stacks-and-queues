/* eslint-disable strict */
const Stack = require("../lib/stack");

const match = (expression) => {
  const stack = new Stack();
  let result = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(" || expression[i] === ")") {
      stack.push(expression[i]);
    }
  }
  while (stack.top) {
    let popped = stack.pop();
    popped === ")" ? result++ : result--;
    if (result < 0) return false;
  }
  return result === 0 ? true : false;
};

module.exports = match;
