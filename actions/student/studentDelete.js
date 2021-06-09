const { Student } = require("../../models/students");

const studentDelete = async(req, res) => {
  const id = parseInt(req.params.id);
  try {
    const student = await Student.findOneAndDelete(id);
    res.send(student)
    if (!student) return res.status(404).send('ID is not found!');
  } catch {
    return res.status(404).send('ID is not found!');
 }
}

module.exports.studentDelete = studentDelete;