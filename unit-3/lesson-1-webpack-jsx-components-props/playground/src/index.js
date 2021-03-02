const sodas = ["Fanta", "Ginger Ale", "Pepsi", "Coke", "Lacriox"];

function Soda(props) {
  return <li>{props.soda}</li>;
}

function App() {
  return (
    <ul>
      {sodas.map(function (nameOfSoda) {
        return <Soda key={nameOfSoda} soda={nameOfSoda} />;
      })}
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
