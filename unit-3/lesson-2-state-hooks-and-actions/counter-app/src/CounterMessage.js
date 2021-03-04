import React from "react";

function CounterMessage(props) {
  return (
    <div className="ChildComponent">
      <h1>Counter Message</h1>
      <p>The current count is: </p>
      <p data-testid="counter">{props.message}</p>
      <button onClick={props.increment}>
        This is in CounterMessage, click to inc
      </button>
    </div>
  );
}
export default CounterMessage;
