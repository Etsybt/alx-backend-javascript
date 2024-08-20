import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const headers = lines.shift().split(',');

        const fieldIndex = headers.indexOf('field');
        const firstNameIndex = headers.indexOf('firstname');
        const students = {};

        for (const line of lines) {
          const record = line.split(',');
          const field = record[fieldIndex];
          const firstName = record[firstNameIndex];

          if (!students[field]) students[field] = [];
          students[field].push(firstName);
        }

        resolve(students);
      }
    });
  });
}
