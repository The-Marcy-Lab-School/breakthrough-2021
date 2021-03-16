# Practice Exercises

1. Given everything you have learned so far, how might we use front-end code in conjunction with our back-end applications? Why might we want to build this way?

2. What is the purpose of the Express framework? How does it make our lives easier?

3. Build a basic route using a GET request.

4. Build a basic route responding to a POST request

5. Build a route that returns data from a query string. For example, visiting `/?name=Doug` should respond with "Hello, Doug!"

6. Build a route that returns data from parameters submitted with a form. For example, send a POST request to `/` with the params of `{name: 'Doug'}` should respond with "Hello, Doug!"

7. Build a route that simply redirects to another route.

8. Build a Caesar Cipher application - your app should respond to a POST request and should function as follows: Return your response as a JSON object with a key of the input and a value of the output.

9. In your own words, what is the purpose of middleware in web applications? Why is it useful?

10. Write a custom middleware function for an express application that tracks how many times a page has been viewed and logs that count to the console. You should account for the app being able to display multiple, different pages.

11. How do templates fit into web applications? Why are they useful?

12. Choose your favorite dynamic web app (i.e. Facebook, Youtube, Soundcloud) and visit your home page. What do you think the template might look like that renders that view? What pieces of data are stored that relate to your profile?

13. Write a route that renders the current time dynamically using an EJS template. Your solution should include both the template file and the route/action.
