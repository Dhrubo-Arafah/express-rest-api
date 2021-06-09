const db = require('../../db')

const updatedStudents = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  db.getDBStudents()
    .then(students => {
      const student = students.find(student => student.id === id)
      if (!student) res.status(404).send("No student Found With This ID")
      else {
        const index = students.findIndex(student => student.id === id);
        students[index] = updatedData;
        db.insertDBStudent(students)
          .then(msg => res.send(updatedData)
          )
      }
    })
}

module.exports.updatedStudents = updatedStudents;