const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (!databasePath) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Database path not provided');
      return;
    }

    // Capture console output
    const oldLog = console.log;
    let responseBody = '';

    console.log = (...args) => {
      responseBody += `${args.join(' ')}\n`;
    };

    countStudents(databasePath)
      .then(() => {
        console.log = oldLog; // Restore original console.log
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${responseBody}`);
      })
      .catch((error) => {
        console.log = oldLog; // Restore original console.log
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ${req.url}</pre></body></html>`);
  }
});

app.listen(1245);

module.exports = app;
