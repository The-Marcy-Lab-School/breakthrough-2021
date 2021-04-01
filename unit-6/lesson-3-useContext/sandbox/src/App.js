import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import UserContext from "./context/user-context";
import "./App.css";

function App() {
  const [user, setUser] = React.useState(["one", "two"]);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          <Route
            path="/about"
            render={() => (
              <div>
                <Header />
                <About />
              </div>
            )}
          />
          <Route path="/contact">
            <Contact>
              <Header />
            </Contact>
          </Route>
          <Route path="/" exact>
            <div>This is my awesome app</div>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
