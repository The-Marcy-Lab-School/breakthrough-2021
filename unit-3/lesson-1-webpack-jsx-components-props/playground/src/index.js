// console.log("Hello World");

const newDiv1 = document.createElement("div");
console.dir(newDiv1);

// newDiv.innerText = "Hello World";

// document.body.append(newDiv);

// return React.createElement(
//   "button",
//   {
//     style: {
//       backgroundColor: "green",
//     },
//     onClick: () => {
//       throw new Error("You must provide a onclick function");
//     },
//     ...options,
//   },
//   text
// );
// const button = Button(
//   {
//     onClick: () => console.log("something else"),
//     style: {
//       backgroundColor: "purple",
//     },
//   },
//   "Click Me"
// );

// const button2 = Button({}, "No CLick me");

// const sports = ["basketball", "soccer", "baseball"];

const text = "some text";

function Button(props) {
  console.log(props);
  // const style = options.style;
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
}

function Input(whatever) {
  return <input type={whatever.inputType} />;
}

function App(props) {
  return (
    <div className="bg-red" aria-label="react element">
      <div>
        <p>
          <Button className="bg-red">Text</Button>
          <Button onClick={() => console.log("i was clicked")} />
          <Button />
        </p>
        <Input inputType="text" />
        <Input inputType="password" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app")); //document.getElementById("app"));
