/* eslint-disable strict */
const Queue = require("../lib/queue");

const connected = (G, s, r) => {
  const visited = new Set();
  if (Object.keys(G).length === 0) return false;
  if (s === r) return true;
  let queue = new Queue();
  queue.enqueue(G[s]);
  while (queue.first) {
    let top = queue.dequeue();
    if (top.includes(r)) return true;
    top.forEach((element) => {
      if (!visited.has(element)) queue.enqueue(G[element]);
      visited.add(element);
    });
  }
  return false;
};

module.exports = connected;
