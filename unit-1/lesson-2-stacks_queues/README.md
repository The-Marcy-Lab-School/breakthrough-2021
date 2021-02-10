# Lesson: Queues and Stacks

## Essential Questions

- How does the ordering of stack differ from the ordering of items in a queue?
- Where do we see stacks and queues in the real world?
- What are common use cases for stacks and queues in computer science?

## Key Terms

- Queue
- Stack
- Deque
- LIFO
- FIFO

# Stacks

## What is a Stack?

- A stack is an abstraction.
- It is a list that only allows the user to process elements in a LIFO manner.

## Mental Model and Visualization

## Important Terminology

- LIFO (Last In, First Out)
- push (add element to the "top" of the list)
- pop (remove element from the "top" of the list)

## What can stacks be used to model?

- model open and closing pairs
- stack of books
- going back and forth in our browsing history
- removing weights for a squat rack

## Stack methods

- size()
- isEmpty() // returns boolean
- push() // add an item to the "top" of the stack
- pop() // remove an item from the "top" of the stack
- peek() // show us what's at the top

## Are there different ways to implement a Stack?

- Yes, but arrays are simple AND fast!

## Bounded Stacks

- A stack that has a maxSize.
- What is a stack overflow?
- What is a stack underflow?

## What is THE Stack in JavaScript?

- demo different function calls
- What happens when there is an error in the code?
  - stack trace
- What happens if we call too many functions?

# Queues

## What is a Queue?

- A queue is an abstraction.
- It is a list that only allows the user to process elements in a FIFO manner.

## Mental Model and Visualization

## Important Terminology

- FIFO (First In, First Out)
- enqueue (add element to the back of the list)
- dequeue (remove element from the front of the list)

## What can queues be used to model?

- getting into Poyeyes
- line at the super market
- line for iPhone
- playlist!

## Different ways to implement a Queue

- We need a list, what "list" data structures can we use?
  - LinkedList to model a queue
  - Array
- What are the run-time and space benefits of each approach?
  - arrays and singly linked lists can be slower (O(n))
  - - double linked list (O(1))
- What is the easiest approach?
  - use arrays

## Queue methods

- size()
- isEmpty()
- enquque()
- dequeue()
- peek()

## Learning Assignments

- **Codecademy:** [Pass the Technical Interview with JavaScript](https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript)
  - Queues
  - Stacks
- Blog: [Deque](https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b)

## Problem Set

- [Problem Set: Stacks and Queues](https://classroom.github.com/a/rOc2cy53)
