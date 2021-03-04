# Practice Exercises - Async and Use Effect

0. In your own words, describe what a pure function is? Why are they important?

1. How do we handle side effects in our React Components? Why is it important to deal with them in that way?

2. Using the test suite as a guide, build an application that fetches data from the [Pokemon API](https://pokeapi.co/). Your application should first display a Loading message, then display a list of Pokemon once the list has loaded. Install the packages using `npm install` and run the tests using `npm test`

3. Once your test suite is passing, how might you improve the code quality? What are some patterns we can use to make our code more readable and easier to maintain?

4. Write an application that mimics an e-commerce site. The app should render a home page. When visiting the site for the first time, we should should them a modal overlay with the following text "Would you like to receive 15% off?", an input to enter their email address, a button that yes "YES" and a button that says "NOT RIGHT NOW"
   * If they enter something in the email input and click "YES", we should not should them the modal overlay on their next visit.
   * If they click "NOT RIGHT NOW", we should continue to show the modal on each subsequent visit to the site. 