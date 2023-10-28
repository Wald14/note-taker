// Imports
const express = require('express');
const path = require('path');
const fs = require('fs');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// middleware for pasing JSON and URL endcoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Send out the home page
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));





// listening for connection to the port
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);