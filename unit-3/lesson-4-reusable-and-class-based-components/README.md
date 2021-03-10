# Lesson: Class Based Components

## Lesson Overview

### Key Terms

- class based components
- constructor function
- component lifecycle methods
- componentDidMount()
- shouldComponentUpdate()
- setState()

### Essential Questions

- How do class components differ from functional components?
- What are the benefits and tradeoffs of using hooks within functional components rather than class components?

## Lecture

[Recording] (https://us02web.zoom.us/rec/play/CLuZ1Aat8Q_NJBiobJza7fTxTHh7K4DZFG1zWENnMB3FpTmHBwvyRszTz6yPHMFRjMMofqmUH6bYscWu.RxbodpjbEM4YmNRM?continueMode=true&_x_zm_rtaid=EMAhdvsXSb6QF0-HIGpUcw.1615409701144.a157dc566f15491fd4c934998dedf0b7&_x_zm_rhtaid=780)
[More] (https://us02web.zoom.us/rec/share/TiOZfIdFH5EYVREih20YX49teVbNKww3mjPt980Wii3kT3Fi6HpbxQUhhoB9JTr8.JntUifTAQOeDytdo)
[Even More 🤩](https://us02web.zoom.us/rec/share/jb3gghecKeXmzh1GvTY_w4Sj6rpYIMq9bsDFV8x2iKu9adYLI1XuVX7D_aTcX_xs.1AmWR4jovk7r-bHC)

### Lab Assignment

[Link to Github Classrooms](https://classroom.github.com/a/_gsdTySG)

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
    id: 1,
    name: "Hammer",
    priceInCents: 1000,
    categories: ["tools", "home"],
  },
  {
    id: 2,
    name: "Coffee mug",
    priceInCents: 495,
    categories: ["dining", "home"],
  },
  {
    id: 3,
    name: "Small Wooden Table",
    priceInCents: 47000,
    categories: ["dining", "home"],
  },
  // ...
];
```

What re-usable components might you create that could be used in the different category pages?

3. Implement the component system you designed above using functinoal components.
