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


