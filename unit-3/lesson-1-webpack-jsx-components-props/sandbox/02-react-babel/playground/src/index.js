// Using JSX
const text = "Hello World";
console.log(text);
// add the above text to the page using React.createElement

// const MyParagraph = React.createElement("p", {}, text);
function MyParagraph(props) {
  return <p>{text}</p>;
}

function Button(props) {
  return (
    <button className={props.className} onClick={handleClick}>
      Click Me
    </button>
  );
}

function App(props) {
  return (
    <div className="bg-red">
      <MyParagraph className="red" />
      <Button className="red" handleClick={() => console.log("clicked")} />
      <Button className="green" handleClick={() => console.log("clicked")} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

// const button = React.createElement(
//   "button",
//   {
//     className: "bg-red",
//   },
//   "Click Me"
// );

// const parentDiv = React.createElement("div", {}, [el, button]);

// add a button to the page that logs the text to the console
