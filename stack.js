/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to (top) of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.first)
      newNode.next = this.first;
    if (!this.last)
      this.last = newNode;
    this.first = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top (first) of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty())
      throw new Error("Stack is Empty");
    const removedNode = this.first;
    this.first = this.first.next;
    if (this.first === null)
      this.last = null;
    this.size--;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.isEmpty())
      throw new Error("Stack is Empty");
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
