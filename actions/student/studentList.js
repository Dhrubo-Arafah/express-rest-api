const db = require('../../db')

const studentList = (req, res) => db.getDBStudents()
  .then(students => res.send(students));

module.exports.studentList = studentList;