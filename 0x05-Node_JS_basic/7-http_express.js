const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Route for '/'
app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(500).type('text').send('Database path not provided');
    return;
  }

  // Capture console.log output
  let logOutput = '';
  const originalLog = console.log;
  console.log = (msg) => {
    logOutput += `${msg}\n`;
  };

  countStudents(databasePath)
    .then(() => {
      console.log = originalLog; // Restore original console.log
      res.type('text').send(`This is the list of our students\n${logOutput}`);
    })
    .catch((error) => {
      console.log = originalLog; // Restore original console.log
      res.status(500).type('text').send(`Error: ${error.message}`);
    });
});

// Start the server
app.listen(port, () => {
});

module.exports = app;
