class Queue {
  constructor() {
    this._items = [];
  }

  size() {
    return this._items.length;
  }

  // returns a boolean
  isEmpty() {
    return this.size() === 0;
  }

  enqueue(val) {
    this._items.push(val);
    return this;
  }

  dequeue() {
    const firstItem = this._items.shift();
    return firstItem;
  }
}

class Stack {
  constructor(maxSize) {
    this._items = [];
    this.maxSize = maxSize;
  }

  size() {
    return this._items.length;
  }

  // returns a boolean
  isEmpty() {
    return this.size() === 0;
  }

  // add an item
  push(val) {
    this._items.push(val);

    if (this.size() > this.maxSize) {
      throw new Error("Max Size exceeded");
    }

    return this;
  }

  pop() {
    const poppedItem = this._items.pop();

    return poppedItem;
  }

  peek() {
    return this._items[this.size() - 1];
  }
}

const stack = new Stack(2);

const queue = new Queue();
