# Lesson: Class Based Components

## Lesson Overview

### Key Terms

- class based components
- constructor function
- component lifecycle methods
- componentDidMount()
- componentWillUpdate()
- setState()

### Essential Questions

- How do class components differ from functional components?
- What are the benefits and tradeoffs of using hooks within functional components rather than class components?

### Learning Assigments

1. Internalize how and why React moved from functional components (pre-hooks) to class components by reading about [State and Lifecycle Methods](https://reactjs.org/docs/state-and-lifecycle.html).

2. Refer to the documentation for [React Components](https://reactjs.org/docs/react-component.html), [constructor functions](https://reactjs.org/docs/react-component.html#constructor), [componentDidMount() lifecycle method](https://reactjs.org/docs/react-component.html#componentdidmount), [componentWillUpdate()](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate), and [setState()](https://reactjs.org/docs/react-component.html#setstate).

### Practice Overview

You will analyze the component structure of a legacy, class-based component during this lesson. Then you will convert that class-based component into a functional component that uses hooks.

### Steps:

1. Answer the [short answer questions](practice/short-response.md) about class based components before moving on to step 4.

2. Imagine you are working for an E-Commerce application that sells products with different categories. The data for your products looks like this:

```js
[
   {
      'id': 1,
      'name': 'Hammer',
      'priceInCents': 1000,
      'categories': ['tools', 'home',],
   },
   {
      'id': 2,
      'name': 'Coffee mug',
      'priceInCents': 495,
      'categories': ['dining', 'home',],
   },
   {
      'id': 3,
      'name': 'Small Wooden Table',
      'priceInCents': 47000,
      'categories': ['dining', 'home',],
   },
   // ...
]

```

What re-usable components might you create that could be used in the different category pages? 


3. Implement the component system you designed above using functinoal components. 