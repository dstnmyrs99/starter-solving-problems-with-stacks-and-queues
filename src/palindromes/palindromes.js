/* eslint-disable strict */
const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  if (sentence.length <= 1) return true;
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const length = Math.floor(sentence.length / 2);
  const stack = new Stack();
  for (let i = 0; i < length; i++) {
    stack.push(sentence[i]);
  }
  let j = sentence.length % 2 === 0 ? 0 : 1;
  for (let i = length + j; i < sentence.length; i++) {
    let char = stack.pop();
    if (char !== sentence[i]) return false;
  }
  return true;
  // Your solution here
};

module.exports = isPalindrome;
