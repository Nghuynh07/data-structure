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
    let removingTail = this.tail;
    if (this.length === 0) return undefined;
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removingTail.prev = null;
    }
    this.length--;
    return removingTail;
  }
}

let list = new DoublyLinkedList();
list.push(20);
list.push(30);
list.push("last item");
list.pop();
console.log(list);
