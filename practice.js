const fs = require('fs');

const x = 'start';
console.log(x)

async function doSomething(req, res) {
  fs.readFile('./db/db.json', 'utf8', function (err, data) {
    // If error, return error status
    if (err) {return res.status(500).json({ status: "Error reading notes from server" })}
    // If no error, return success status and continue
    console.log(`Trying to add note: ${JSON.stringify(req.body)}`); 

  })
}

doSomething({
  "title":"Test Title 3",
  "text":"Test text 3"
})