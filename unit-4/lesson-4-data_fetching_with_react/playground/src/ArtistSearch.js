import React from "react";

function ArtistSearch({ token }) {
  const [artistId, setArtistId] = React.useState("");
  const [artist, setArtist] = React.useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setArtistId(value);
  };

  const handleSubmit = (event) => {
    const artistUrl = `https://api.genius.com/artists/${artistId}?access_token=${token}&text_format=plain`;
    event.preventDefault();
    console.log(artistUrl);
    fetch(artistUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && data.response && data.response.artist) {
          setArtist({
            name: data.response.artist.name,
            img: data.response.artist.image_url,
            aliases: data.response.artist.alternate_names,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      Artist Search By Id
      <form onSubmit={handleSubmit}>
        <label htmlFor="artistSearch">Artist Search</label>
        <input value={artistId} id="artistSearch" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {artist && (
        <div>
          <p>{artist.name}</p>
          <img
            src={artist.img}
            alt="artist album cover"
            width="400"
            height="400"
          />
          {artist.aliases.map((alias) => (
            <span>{alias}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArtistSearch;
