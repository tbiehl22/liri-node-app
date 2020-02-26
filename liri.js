require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret,
});

var defaultSong = require("The Sign");
var defaultMovie = "Mr. Nobody";
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case "concert-this":
        getBands(value)
        break;
    case "spotify-this-song":
        if (value === "") {
            value = defaultSong;
        }
     getSongs(value)
     break;
    case "move-this":
        if (value === "") {
            value = defaultMovie;
        }
     getMovies(value)
     break;
    case "do-what-it-says":
        doWhatItSays()
     break;
    default:
     break;
}

function getBands(artists) {
    var artists = value;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response) {
            console.log("Name of the venue:", response.data[0].venue.name);
        })
}
