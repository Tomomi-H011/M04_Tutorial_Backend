// Set up = This is similar to default tags in html
const express = require('express'); // This is a framework for Node.js
// We have to use cors to host a front end and back end on the same device. Declare global variable for cors to use it in different files
var cors = require('cors'); // This is a package that allows the server to accept requests from other servers (cross-origin resource sharing) = from the front end

// Set up the app
const app = express(); // The variable app is the instance of express server
app.use(cors()); //middleware that allows the server to accept requests from other servers
const router = express.Router(); // The variable router is the instance of express router which is used to create routes (sends back only the data requested)


// Start the web server... app.listen(port number, function)/ *Enter 'node app.js' in the terminal to start the server
// app.listen(3000, function() {
//     console.log('Listening on port 3000');
// });

// Making an api using routes
// Routes are used to handle browser requests. They look like URLs.The difference is that when a browser
// requests a route (URL), it is dynamically generated by the server using a function.

// Get or a regular request when someone goes to http://localhost:3000/hello
// When using a function in a route, we almost always have a parameter or handle a response and request.
// app.get("/hello", function(req, res) {
//     res.send("<h1>Hello Express</h1>");  // Display 'Hello Express' in the browser when entering localhost:3000/hello
// });

// Creating a different route
// app.get("/goodbye", function(req, res) {
//     res.send("<h1>Goodbye Express!</h1>"); // Display 'Goodbye Express' in the browser when entering localhost:3000/goodbye
// });

// Creating a route using the express router
router.get("/songs", function(req, res) {
    const songs = [
        {
        title : "We Found Love",
        artist : "Rihanna",
        popularity : 10,
        releaseDate : new Date(2011, 9, 22),
        genre : ["electro house"]
        },
        {
        title : "Happy",
        artist : "Pharrell Williams",
        popularity : 10,
        releaseDate : new Date(2013, 11, 21),
        genre : ["soul", "new soul"]
        }
    ];
    res.json(songs); // Display the song data in the browser in json format when entering localhost:3000/songs
});

// All reqquests that usually use an api start with /api... so the url would be http://localhost:3000/api/songs
app.use("/api", router); // This is the route that the router will use
app.listen(3000); // This is the port that the server will listen to
