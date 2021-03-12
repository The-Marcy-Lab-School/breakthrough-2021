import React from "react";
import "./App.css";

const token =
  "wFOf7XW7UZj3ol7QROVKdozJLNgY3iTy0ndStl73MyvpOdnwox4wPXBTKMCWZTnH";

const artistUrl = `https://api.genius.com/artists/${artistId}?access_token=${token}&text_format=plain`;
const searchUrl = `https://api.genius.com/search?q=${query}&access_token=${token}`;

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
