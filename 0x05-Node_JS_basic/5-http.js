const http = require('http');
const { countStudents } = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then(() => res.end())
      .catch((err) => {
        res.write(`${err.message}\n`);
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(1245);

module.exports = app;

