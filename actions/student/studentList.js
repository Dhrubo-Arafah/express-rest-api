const { Student } = require('../../models/students')

const studentList = async (req, res) => {
  const students = await Student.find()
    .sort({ name: 1 });
  res.send(students)
}

module.exports.studentList = studentList;