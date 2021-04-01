import React from "react";
import UserContext from "../context/user-context";

class Other extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(values) => {
          return values.map((val) => <span key={val}>{val}</span>);
        }}
      </UserContext.Consumer>
    );
  }
}

export default function Header() {
  const values = React.useContext(UserContext);

  return (
    <nav>
      <h2>
        Hi there{" "}
        {values.map((val) => (
          <span key={val}>{val}</span>
        ))}
      </h2>
      <hr />
      <Other />
    </nav>
  );
}
