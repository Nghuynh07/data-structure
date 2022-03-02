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
      let removingTail = this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.tail.prev = removingTail;

      //   this.tail.next = newNode;
      //   newNode.prev = this.tail;
      //   this.tail = newNode;
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
    if (index <= Math.floor(this.length / 2)) {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter !== index) {
        current.current.prev;
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
}

let list = new DoublyLinkedList();
list.push(20);
list.push(30);
list.push(22);
list.push(11);
list.unshift(1);
// console.log(list.get(10));
console.log(list);
