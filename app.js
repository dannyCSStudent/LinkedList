const LinkedList = require('./LinkedList');

const list = new LinkedList.fromValues(10, 20, 30, 40);
list.toString();
list.append(50);
list.append(60);
list.append(70);
list.toString();
// console.log(list.size())
// console.log(list.returnHead())
// console.log(list.returnTail())
// console.log(list.at(3))
// console.log(list.contains(33))
// console.log(list.contains(30))
// console.log(list.find(60))
// console.log(list.find(610))
list.insertAt(35, 3)
list.toString()
list.removeAt(3)
list.toString()
list.pop()
list.toString()
