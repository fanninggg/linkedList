const LinkedList = require('./linkedList.js');

describe("#prepend", () => {
  test("Should add a new head node to the list", () => {
    const list = new LinkedList();
    list.prepend(10);
    const oldHead = list.head;
    list.prepend(20);

    expect(list.head.value).toBe(20);
    expect(list.head.reference).toBe(oldHead)
  })
  test("Should update the length correctly", () => {
    const list = new LinkedList();
    list.prepend(10);
    list.prepend(20);

    expect(list.length).toBe(2)
  })
})

describe('#find', () => {
  describe('with index 0', () => {
    test("should return head node", () => {
      const list = LinkedList.fromArray([10, 20, 30, 40]);
      expect(list.find(0).value).toBe(10)
    })
  })

  describe('with good index', () => {
    test("should return node at that index", () => {
      const list = LinkedList.fromArray([10, 20, 30, 40]);
      expect(list.find(2).value).toBe(30)
    })
  })

  describe('with index less than 0', () => {
    test("should return null", () => {
      const list = LinkedList.fromArray([10, 20]);
      expect(list.find(-1)).toBe(null)
    })
  })

  describe('with index greater than list length', () => {
    test("should return null", () => {
      const list = LinkedList.fromArray([10, 20]);
      expect(list.find(5)).toBe(null)
    })
  })
})

describe('#insert', () => {
  describe('with good index', () => {
    test("should insert a new node at that index", () => {
      const list = LinkedList.fromArray([10, 20, 30, 40]);
      list.insert(2, 80)
      expect(list.find(2).value).toBe(80)
    })
  })

  describe('with index 0', () => {
    test("should insert a new node at index 0", () => {
      const list = LinkedList.fromArray([10, 20, 30, 40]);
      list.insert(0, 80)
      expect(list.head.value).toBe(80)
    })
  })

  describe('with index less than 0', () => {
    test("should return null", () => {
      const list = LinkedList.fromArray([10, 20]);
      expect(list.insert(-1, 80)).toBe(null)
    })
  })

  describe('with index greater than list length', () => {
    test("should return null", () => {
      const list = LinkedList.fromArray([10, 20]);
      expect(list.insert(5, 80)).toBe(null)
    })
  })
})

describe('#removeHead', () => {
  test('Should remove the head of the list', () => {
    const list = LinkedList.fromArray([10, 20, 30]);
    list.removeHead();
    expect(list.head.value).toBe(20)
    expect(list.length).toBe(2)
  })
})

describe('#removeAt', () => {
  describe('with good index', () => {
    test("should remove a node at that index", () => {
      const list = LinkedList.fromArray([10, 20, 30, 40]);
      list.removeAt(2)
      expect(list.find(2).value).toBe(40)
      expect(list.length).toBe(3)
    })
  })

  describe('with index 0', () => {
    test("should remove the head node", () => {
      const list = LinkedList.fromArray([10, 20, 30, 40]);
      list.removeAt(0)
      expect(list.head.value).toBe(20)
      expect(list.length).toBe(3)
    })
  })

  describe('with index less than 0', () => {
    test("should return null", () => {
      const list = LinkedList.fromArray([10, 20]);
      list.removeAt(-1)
      expect(list.length).toBe(2)
    })
  })

  describe('with index greater than list length', () => {
    test("should return null", () => {
      const list = LinkedList.fromArray([10, 20]);
      list.removeAt(5)
      expect(list.length).toBe(2)
    })
  })
})