// 10 ---> 5 ---> 16
// let linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    (this.tail = this.head), (this.length = 1);
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  traversalToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traversalToIndex(index - 1);
    const holder = leader.next;
    leader.next = newNode;
    newNode.next = holder;
    this.length++;
    return this.head;
  }
  remove(index) {
    let leader = this.traversalToIndex(index-1);
    const unwantedNode = leader.next
    leader.next = unwantedNode.next;
    this.length--;
    console.log(leader);

  }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.insert(2, 13);
linkedList.remove(3);
linkedList.printList();
