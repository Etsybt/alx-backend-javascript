import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];

    try {
      const students = await readDatabase(dbPath);
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      let output = 'This is the list of our students\n';

      for (const field of sortedFields) {
        const list = students[field].join(', ');
        output += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
      }

      res.status(200).send(output.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(dbPath);
      const list = students[major].join(', ');

      res.status(200).send(`List: ${list}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
