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

     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
2. <strong>node liri.js spotify-this-song '<song name here></strong>

   * Shows the following information about the song in your terminal/bash window:

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

   * If no song is provided then the program will default to "The Sign" by Ace of Base.
   
3. <strong>node liri.js movie-this '<movie name here></strong>

   * This will output the following information to your terminal/bash window:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

   4. <strong>node liri.js do-what-it-says</strong>

   * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It runs `spotify-this-song` for "I Want it That Way." 

<h1>Screenshots</h1>

   * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.












link to screenshots
https://docs.google.com/document/d/1AiCi1sMZxJ1mfEHeZR5iXl1II3XnTo1mizDf8i6c1EM/edit?usp=sharing
