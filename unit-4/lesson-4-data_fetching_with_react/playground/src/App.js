import React from "react";
import ArtistSearch from "./ArtistSearch";
import "./App.css";

const token =
  "wFOf7XW7UZj3ol7QROVKdozJLNgY3iTy0ndStl73MyvpOdnwox4wPXBTKMCWZTnH";

function SongSearch() {
  const [searchInput, setSearchInput] = React.useState("");
  const [hits, setHits] = React.useState([]);
  const [otherInput, setOtherInput] = React.useState("");

  // we only want this to run if search INput changes
  React.useEffect(() => {
    const fetchData = async () => {
      const searchUrl = `https://api.genius.com/search?q=${searchInput}&access_token=${token}`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      const songs = data.response.hits.map((hit) => {
        return {
          id: hit.result.id,
          title: hit.result.title_with_featured,
        };
      });
      console.log(data);
      setHits(songs);
    };
    fetchData();
  }, [searchInput]);

  return (
    <div>
      <form>
        <input
          id="otherInput"
          type="text"
          name="search"
          onChange={(e) => setOtherInput(e.target.value)}
          value={otherInput}
        />
        <input
          id="search"
          type="text"
          name="search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </form>
      {hits && (
        <ul>
          {hits.map((hit) => (
            <li key={hit.id}>{hit.title}</li>
          ))}
        </ul>
      )}{" "}
    </div>
  );
}

function LikeButton() {
  const [likes, setLikes] = React.useState(44);
  const [userClickedLike, setUserHasClickedLike] = React.useState(false);

  const updateLikAmount = (e) => {
    if (!userClickedLike) {
      setLikes(likes + 1);
      setTimeout(() => {
        console.log("request finished");
      }, 2000);
    }
    setUserHasClickedLike(true);
  };

  const handleDislike = (e) => {
    throw new Error(`You can't not like Pringles...They're like SOOOOO fetch!`);
  };

  return (
    <div>
      <p>Pringles are the best chips in the world.</p>
      <img
        src="https://media2.giphy.com/media/kE8l1rhNUCFg8FvLJy/giphy.gif"
        alt="pringles gif"
      />
      <p>You Have {likes} amount of Likes</p>
      <button onClick={updateLikAmount}>LIKE THIS OR ELSE</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <LikeButton />
    </div>
  );
}

export default App;
