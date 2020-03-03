<h1>LIRI Bot</h1>

<h2>Overview</h2>

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives back data.

<h2>Challenge</h2>

Use Node JS to create LIRI Bot where it takes in commands through Language interpretation using the following commands in the terminal:

<li>concert-this</li>

<li>spotify-this-song</li>

<li>movie-this</li>

<li>do-what-it-says</li>
  
<h2>Technology Used</h2>

<li>GitHub</li>
<li>Visual Studio Code</li>
<li>Node.js</li>

<h4>API's</h4>
<li>OMDB (http://www.omdbapi.com)</li>
<li>Bands in Town (http://www.artists.bandsintown.com/bandsintown-api)</li>
<li>Spotify (https://developer.spotify.com/)</li>
  
 <h4>NPM Packages</h4>
<li>Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)</li>
<li>Axios (https://www.npmjs.com/package/axios)</li>
<li>Moment (https://www.npmjs.com/package/moment)</li> 
<li>DotEnv (https://www.npmjs.com/package/dotenv)</li> 

<h2>What Each Command Does</h2>

LIRI searches Spotify for songs, OMDB for movies and Bands in Town for concerts.

1. <strong>node liri.js concert-this <artist/band name here></strong>

   Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

     <li>Name of the venue</li>
     <li>Venue location</li>
     <li>Date of the Event (use moment to format this as "MM/DD/YYYY")</li>











link to screenshots
https://docs.google.com/document/d/1AiCi1sMZxJ1mfEHeZR5iXl1II3XnTo1mizDf8i6c1EM/edit?usp=sharing
