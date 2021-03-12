import React from "react";
import "./App.css";

const token =
  "wFOf7XW7UZj3ol7QROVKdozJLNgY3iTy0ndStl73MyvpOdnwox4wPXBTKMCWZTnH";

function ArtistSearch() {
  const [artistId, setArtistId] = React.useState("");
  const [artist, setArtist] = React.useState(null);

  const handleChange = (e) => {
    setArtistId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://api.genius.com/artists/${artistId}?access_token=${token}&text_format=plain`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && data.response && data.response.artist) {
          setArtist(data.response.artist);
        } else {
          setArtist(null);
        }
      });
  };

  return (
    <div>
      <h3>Search For An Artist By Id</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={artistId} onChange={handleChange} />

          <button onClick={handleSubmit}>Search Artist</button>
        </form>
      </div>
      {artist && (
        <div>
          <h1>{artist.name}</h1>
          <img
            src={artist.image_url}
            alt="artist header"
            width="400"
            height="400"
          />
        </div>
      )}
    </div>
  );
}

function SongSearch() {
  const [query, setQuery] = React.useState("");
  const [hits, setHits] = React.useState(null);
  // Demonstrate that we need to tell useEffect what changes to respond to
  const [otherInput, setOtherInput] = React.useState("");

  React.useEffect(() => {
    const searchUrl = `https://api.genius.com/search?q=${query}&access_token=${token}`;

    if (query) {
      fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data && data.response && data.response.hits) {
            const songs = data.response.hits.map((hit) => ({
              name: hit.result.title,
              artist: hit.result.primary_artist.name,
              artistId: hit.result.primary_artist.id,
            }));

            console.log(songs);
            setHits(songs);
          }
        });
    }
  }, [query]);

  return (
    <div>
      <h2>Search Any Song You Like</h2>
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
      <div>
        {hits &&
          hits.map((hit) => {
            return (
              <dl>
                <dt>{hit.name}</dt>
                <dd>{hit.artist}</dd>
                <dd>{hit.artistId}</dd>
              </dl>
            );
          })}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ArtistSearch />
      <hr />
      <SongSearch />
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

export default App;
