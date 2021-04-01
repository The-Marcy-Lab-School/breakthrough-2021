import React from "react";
import UserContext from "../context/user-context";

export default function Header() {
  const user = React.useContext(UserContext);

  return (
    <nav>
      <h2>Hi there {user.name}</h2>
    </nav>
  );
}
