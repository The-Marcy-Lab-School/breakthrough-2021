1. What is the purpose of Babel in developing JavaScript applications? How does it make our lives easier?

2. Write a function called `App` that returns the element you created in the previous example. Use the function to render into the DOM instead of the element.

3. Update your `App` function to take in an argument called `props`. Props should have two keys:
  * `title`: a string to represent the page title (use in the text of the h1)
  * `flavors`: an array of strings, each one representing an ice cream flavor.
Change your function so that it can render that data dynamically.

4. Add Babel to your project following the guide here. This will allow us to write JSX so we don't have to keep using `React.createElement`. Update your code to use JSX.