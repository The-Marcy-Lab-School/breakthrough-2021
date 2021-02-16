class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(tree) {
    this.children.push(tree);
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  setLeftChild(val) {
    if (val instanceof BinarySearchTree) {
      this.left = val;
    } else {
      this.left = new BinarySearchTree(value);
    }
  }

  setRightChild(val) {
    if (val instanceof BinarySearchTree) {
      this.right = val;
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
}

// Print current data before
// Then left, then right
// Depth First
function preOrder(node) {
  if (node) {
    console.log(node.value);

    preOrder(node.left);
    preOrder(node.right);
  }
}

// Print left, then right
// Then Print current data
function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);

    console.log(node.value);
  }
}

// Print left, current data, then right
function inOrder(node) {
  if (node) {
    inOrder(node.left);

    console.log(node.value);

    inOrder(node.right);
  }
}

let root = new BinarySearchTree(41);
let node20 = new BinarySearchTree(20);
let node65 = new BinarySearchTree(65);
let node11 = new BinarySearchTree(11);
let node19 = new BinarySearchTree(19);
let node29 = new BinarySearchTree(29);
let node32 = new BinarySearchTree(32);
let node50 = new BinarySearchTree(50);
let node91 = new BinarySearchTree(91);
let node72 = new BinarySearchTree(72);
let node77 = new BinarySearchTree(77);
let node99 = new BinarySearchTree(99);

root.setLeftChild(node20);
root.setRightChild(node65);

node20.setLeftChild(node11);
node20.setRightChild(node29);

node29.setRightChild(node32);

node11.setRightChild(node19);

node65.setLeftChild(node50);
node65.setRightChild(node91);

node91.setLeftChild(node72);
node91.setRightChild(node99);

node72.setRightChild(node77);

// preOrder(root)
// postOrder(root);
// inOrder(root)
