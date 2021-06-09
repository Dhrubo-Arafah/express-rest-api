const { Student } = require("../../models/students");

const updatedStudents = async(req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, updatedData, { new: true, useFindAndModify: false });
    if (!student) return res.status(404).send('ID is not found!');
    res.send(student);
  } catch {
    return res.status(404).send('ID is not found!');
  }
}

module.exports.updatedStudents = updatedStudents;