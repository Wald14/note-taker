const fs = require('fs');

fs.readFile('./db/db.json', 'utf8', function (err, data) {
  if (err) {
    console.log('error')
    return
  }
  console.log(data);
  const savedNotes = JSON.stringify(data)
  return savedNotes

})