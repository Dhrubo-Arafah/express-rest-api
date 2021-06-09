const db = require('../db');

const studentDetail = (req, res) => {
  const id = parseInt(req.params.id);
  db.getDBStudents()
    .then(students => {
      const student = students.find(std => std.id === id);
      if (!student) res.status(404).send("No Student Found With This ID");
      else res.send(student);
    })
}

module.exports.studentDetail = studentDetail;