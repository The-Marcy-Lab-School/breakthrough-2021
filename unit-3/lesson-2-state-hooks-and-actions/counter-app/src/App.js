import React, { useReducer } from "react";
import CounterMessage from "./CounterMessage";
import { INCREMENT, DECREMENT, RESET } from "./mutation-types";

console.log(React);
// create an input
//  keep track of input using state
// and render the value of that input on the screen
function App() {
  const [counter2, setCounter] = React.useState(() => {
    // do computation here
    return 0;
  });
  //   const decrement = () => setCounter(counter - 1);
  //   const increment = () => setCounter(counter + 1);

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case DECREMENT:
        return state - 1;
      case INCREMENT:
        return state + 1;
      case RESET:
        state = 0;
        return state;
      default:
        throw new Error(`Action not supported`);
    }
  };

  const initialState = 0;
  const [counter, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button
        onClick={() =>
          dispatch({
            type: DECREMENT,
            payload: {
              name: "erwins",
            },
          })
        }
        data-testid="decrementButton"
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({
            type: INCREMENT,
            payload: {
              name: "saget",
            },
          })
        }
        data-testid="incrementButton"
      >
        +
      </button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <hr></hr>
      <CounterMessage message={counter} increment={dispatch} />
    </div>
  );
}

export default App;
