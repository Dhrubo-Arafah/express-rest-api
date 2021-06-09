const db = require('../../db')

const studentDelete = (req, res) => {
  const id = parseInt(req.params.id);
  db.getDBStudents().then(students => {
    const student = students.find(student => student.id === id);
    if (!student) res.status(404).send("No Student Found With this ID");
    const updatedStudents = students.filter(student => student.id !== id);
    db.insertDBStudent(updatedStudents)
      .then(msg => res.send(updatedStudents))
  })
}

module.exports.studentDelete = studentDelete;