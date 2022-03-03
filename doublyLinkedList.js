class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removingTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removingTail.prev = null;
    }

    this.length--;
    return removingTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let poppedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedHead.next;
      this.head.prev = null;
      poppedHead.next = null;
    }
    this.length--;
    return poppedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter, current;
    if (index <= this.length / 2) {
      let current = this.head;
      let counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, value) {
    let indexNode = this.get(index);
    if (indexNode !== null) {
      indexNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);

    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();

    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    let removingNode = this.get(index);

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    removingNode.next = null;
    removingNode.prev = null;

    this.length--;
    return removingNode;
  }
}

let list = new DoublyLinkedList();
list.push(20);
list.push(30);
list.push(11);
console.log(list.insert(0, 99));
list.remove(0);
console.log(list);
