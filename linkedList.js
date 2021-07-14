class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const newHead = new LinkedListNode(value, this.head);
    this.head = newHead;
    this.length++;
  }

  find(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for(let i = 0; i < index; i ++) {
      current = current.reference
    }
    return current;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.prepend(value);
    let prev = this.find(index - 1)
    prev.reference = new LinkedListNode(value, prev.reference)
    this.length ++
  }

  removeHead() {
    this.head = this.head.reference;
    this.length--;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.removeHead();
    let prev = this.find(index - 1);
    prev.reference = prev.reference.reference;
    this.length --;
  }
}

class LinkedListNode {
  constructor(value, reference) {
    this.value = value;
    this.reference = reference;
  }
}

LinkedList.fromArray = function(values) {
  const list = new LinkedList();
  values.reverse().forEach((value) => {
    list.prepend(value)
  })
  return list
};

module.exports = LinkedList;