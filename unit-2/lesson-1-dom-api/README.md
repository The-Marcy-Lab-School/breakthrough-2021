# Leson 1: The DOM API and editing

- Review of DOM & DOM API, DOM node types
  - what type of data structure is DOM
  - What is an API?
  - different DOM node types
- querying the dom
- walkthrough querying hacker news
- CRUD & apis
  - C (creating element)
  - R (reading element)
  - U (updating element)
  - D (deleting element)

### Reading Elements (Selecting from the DOM)

- We can read the elements by traversing the tree, but that takes forever!

| Selector name                   | Return shape   | Return type    | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | --------------------- | -------- |
| `node.getElementById()`         | Single element | Element        | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza | Yes      |

You can copy the exact CSS selector using the Chrome Developer Tools!

### Updating elements (Setting their properties)

- `.innerText`
- `.href`
- `.src`
- `.style`
  - We can access CSS properties by converting them to camelCase
- `innerHTML`

### Creating elements

- `document.createElement()`
- `parentNode.appendChild()`
- `parentNode.append()`
- `.innerHTML`

### Removing elements

- `parentNode.removeChild()`

# Key Methods:

- `document.querySelector()`
- `document.querySelectorAll()`
- `document.getElementById()`
- `document.getELementByClassName()`
- `document.getElementByTag()`
- `document.createElement()`
- `node.appendChild()`
- `node.removeChild()`
- `node.nextSibling()`
- `node.previousSibling()`
- `node.childNodes()`
- `element.innerHTML`
- `HTMLElement.innerText`
- `node.remove()`
- `style`

# Essential Questions:

- What is the difference between DOM properties and DOM methods?
- Compare and contrast the two query selector methods with the other DOM methods.
- How can the DOM be queried in order to find a specific element?
- What is necessary to add an element?
- What is a way to change the text of an HTML element?
- How can the content of HTML element be changed?
- How can style (CSS) of HTML be changed?
- How can elements be deleted?

# Learning Assignments:

1. [Modern JavaScript Tutorial](https://youtu.be/wKBu_dEaF9E) by Code Ninja (tutorial video)

2. [Building Interactive JavaScript Websites](https://www.codecademy.com/learn/build-interactive-websites) on Codecademy

   - JavaScript Interactive Websites section

3. [Eloquent JavaScript](https://eloquentjavascript.net/14_dom.html#h_jS5BEpmLY0) (book and exercises):

- Sections:

        1. Finding Elements
        2. Changing the Document
        3. Creating Nodes
        4. Attributes
        5. Layouts
        6. Styling (_this will be review_)
        7. Cascading Styles (_this will be review_)
        8. Query Selectors
        9. Positioning and Animating

- [Exercises](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe)

4. MDN Documentation:

   **Find Elements**

- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [querySeletorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [getElementsByTageName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

**Create New Elements**

- [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

**Update Existing Elements**

- [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

**Delete Elements**

- [removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

# Practice

[Practice](./practice)

## Lab Assignment

[Sports Page](https://classroom.github.com/a/prblzCGo)
