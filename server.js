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



// Returns the home page
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// Returns the notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// Reads db.json and returns all saved notes as JSON
app.get('/api/notes', (req, res) => {
  return ( fs.readFile('./db/db.json', 'utf8', function (err, data) {
    // If error, return error status
    if (err) {return res.status(500).json({ status: "Error reading notes from server" })}
    // If no error, return success status and continue
    res.status(200).send(data);   
  }))
})

// Reads db.json, adds note, rewrites db.json
app.post('/api/notes', (req, res) => {
  return ( fs.readFile('./db/db.json', 'utf8', function (err, data) {
    // If error, return error status
    if (err) {return res.status(500).json({ status: "Error sending note to server" })}
    // If no error, parse data, push in new note, rewrite file 
    const notes = JSON.parse(data);
    notes.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
      if (err) console.log("Error with writing file")
    })
    console.log('New note added!')
    res.status(200).send(notes)
  }))
})



// listening for connection to the port
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);