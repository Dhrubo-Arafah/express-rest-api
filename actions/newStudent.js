const db = require('../db')

const newStudent = (req, res) => {
  const student = req.body;
  db.getDBStudents()
    .then(students => {
      students.push(student);
      db.insertDBStudent(students)
        .then(data => res.send(student))
    });
}

module.exports.newStudent = newStudent;