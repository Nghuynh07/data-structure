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

  unshift(val) {
    let newNodeToFront = new Node(val);
    if (!this.head) {
      this.head = newNodeToFront;
      this.tail = this.head;
    } else {
      newNodeToFront.next = this.head;
      this.head = newNodeToFront;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    if (!index) return false;
    let node = this.get(index);
    console.log(node);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      // !!this.unshift(value)
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      // !!this.push(value)
      this.push(value);
      return true;
    } else {
      let newNode = new Node(value);
      let previousNode = this.get(index - 1);
      let indexNode = this.get(index);
      previousNode.next = newNode;
      newNode.next = indexNode;
    }
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let previousNode = this.get(index - 1);
    let removingNode = this.get(index);
    previousNode.next = removingNode.next;
    this.length--;
    return removingNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    console.log(this);
    //     let next;
    //     let previous = null;
    //     for (var i = 0; i < this.length; i++) {
    //       next = node.next;
    //       node.next = previous;
    //       previous = node;
    //       node = next;
    //     }
  }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(1000);
list.push("good morning");
// list.unshift("unshiftingSecond");
// console.log(list.get(1));
// console.log(list.set(1, "awesome"));
// console.log(list.insert(3, "coolbeans!"));
// console.log(list.remove(1));
console.log(list.reverse());
