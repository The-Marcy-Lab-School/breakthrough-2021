import React from "react";
import "./App.css";
import useForm from "./hooks/useForm";
import useDocumentTitle from "./hooks/useDocumentTitle";

// how many times does a component render

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

  const { form, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <form>
      {form.email}|{form.password}
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
    </form>
  );
}

function About() {
  useDocumentTitle("About");
  return <div>All about me</div>;
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
    <div>
      <form>
        <select
          value={component}
          onChange={(e) => setComponent(e.target.value)}
        >
          <option value="Login">Login</option>
          <option value="Register">Register</option>
          <option value="About">About</option>
        </select>
      </form>
      <Page />
    </div>
  );
}

export default App;
