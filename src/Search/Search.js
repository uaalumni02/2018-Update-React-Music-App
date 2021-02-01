import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    artistSearch: [],
  };

  fetchArtistInformation(artistSearch) {
    const search = artistSearch;
    const API_URL =
      "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" +
      search +
      "&api_key=bcf084ec6adb58969e53f3ecd010ac84&format=json";
    console.log(API_URL);
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ topalbums: response.topalbums, error: "" });
      })
      .catch((error) => this.setState({ error: error.message }));
  }

  submitFormHandler(e) {
    e.preventDefault();
    this.fetchArtistInformation(this.state.artistSearch);
  }

  inputChangeHandler(e) {
    const artistSearch = e.target.value;
    this.setState({ artistSearch });
  }
  render() {
    return (
      <div className="inputSearch">
        <div className="text">
          <h1>Music App</h1>
          <h2> Search For Top Albums And Songs </h2>
        </div>
        <form onSubmit={this.submitFormHandler.bind(this)}>
          <input
            type="text"
            placeholder="search"
            onChange={this.inputChangeHandler.bind(this)}
          />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        {this.state.topalbums ? (
          <div className="albumInfo">
            <h3> Top Albums for {this.state.topalbums["@attr"].artist} </h3>

            <ul>
              {this.state.topalbums.album.map((album) => (
                <p> Album Name: {album.name} </p>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
