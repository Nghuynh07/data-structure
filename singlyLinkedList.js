class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let removingHead = this.head;
    this.head = removingHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removingHead;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push(3);
list.push(1000);
list.push("lkjasfjlkasdkjlf");

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list);
