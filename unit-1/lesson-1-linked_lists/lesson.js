class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a new node with the given value
    const node = new Node(val);

    // if there is no head, set head & tail to node
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      // otherwise make the next property on the current tail
      // the new node
      // and set the tail to the node
      this.tail.next = node;
      this.tail = node;
    }

    // increment length
    this.length++;
    return this;
  }

  traverse() {
    // start at head
    let current = this.head;

    // as long as we have a current,
    // keep looping
    while (current) {
      // do something
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    // if no nodes return undefined
    if (!this.head) return;

    // loop until you reach the end of the list (the tail)
    let current = this.head;
    let secondToLast = this.head;

    while (current.next) {
      secondToLast = current;
      current = current.next;
    }

    // set the 2nd to last node 'next' property to be null
    secondToLast.next = null;

    // and set the tail to be this node as well
    this.tail = secondToLast;

    // decrease the length by 1
    this.length--;

    // edge case
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // return the value of the node
    return current;
  }

  shift() {
    // if no nodes return undefined
    if (!this.head) return;

    // get currentHead
    const oldHead = this.head;

    // get the next value (the new Head)
    const newHead = oldHead.next;

    // set the new head
    this.head = newHead;

    this.length--;

    if (length === 0) {
      this.tail = null;
    }

    // return the removed item
    return oldHead;
  }

  unshift(val) {
    // create a new node
    const newHead = new Node(val);

    // if there is no head, set head & tail
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      // get a reference to oldhead
      const oldHead = this.head;

      // set the new Head
      this.head = newHead;

      newHead.next = oldHead;
    }

    // update the length
    this.length++;

    return this;
  }
}

let ll = new LinkedList();

ll.push("E");
ll.push("r");
ll.push("w");
ll.push("i");
ll.push("n");
ll.push("s");
