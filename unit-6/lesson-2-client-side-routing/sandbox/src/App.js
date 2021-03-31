import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
import useForm from "./hooks/useForm";
import useDocumentTitle from "./hooks/useDocumentTitle";

function Login() {
  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <form>
      {form.email}|{form.password}
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={form.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={form.password}
          onChange={handleChange}
          id="password"
          name="password"
        />
      </div>
    </form>
  );
}

function Register() {
  useDocumentTitle("Register");
  const { search } = useLocation();
  const history = useHistory();

  console.log(history);
  const token = new URLSearchParams(search).get("token");

  console.log(search);

  const { form, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/about");
  };

  return (
    <form onSubmit={handleSubmit}>
      {form.email}|{form.password}
      {token ? <span>{token}</span> : "No token"}
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="reg-email">Email</label>
        <input
          value={form.email}
          onChange={handleChange}
          type="email"
          id="reg-email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={form.password}
          onChange={handleChange}
          id="reg-password"
          name="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function About() {
  useDocumentTitle("About");
  return <div>All about me</div>;
}

function ProtectedRoute(props) {
  const isAuthenticated = false;
  console.log(props);

  return (
    <Route
      path="/redirect-to-login"
      render={() => {
        return isAuthenticated ? props.children : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

function App() {
  const page = {
    Login,
    Register,
    About,
  };

  const [component, setComponent] = React.useState("Login");

  const Page = page[component];

  return (
    <BrowserRouter>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/example">Login</Link>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/example">
          <div>This is an inline example</div>
        </Route>
        <ProtectedRoute foo="bar">
          <div>some more stuff here</div>
          <About />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
