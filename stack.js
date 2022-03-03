class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;

    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push("huynh");
stack.push("tony");
stack.push("kimberly");
stack.push("andy");
stack.pop();
console.log(stack);
