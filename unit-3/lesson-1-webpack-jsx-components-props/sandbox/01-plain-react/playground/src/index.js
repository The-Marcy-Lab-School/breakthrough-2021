const text = "Hello World";
console.log(text);
// add the above text to the page using React.createElement

const el = React.createElement("p", {}, text);
const button = React.createElement(
  "button",
  {
    className: "bg-red",
  },
  "Click Me"
);

const parentDiv = React.createElement("div", {}, [el, button]);

ReactDOM.render(parentDiv, document.getElementById("app"));
// add a button to the page that logs the text to the console

// Create a button using React.createElement
// Btn should have a class of bg-red
// Btn should have text of "Click Me"
