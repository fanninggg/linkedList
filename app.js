const LinkedList = require('./LinkedList.js');

const list = LinkedList.fromArray([10, 20, 30, 40]);
list.removeAt(2)
console.log(list)