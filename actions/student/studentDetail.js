const { Student } = require('../../models/students');

const studentDetail = async(req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id)
    if (!student) return res.status(404).send('ID is not found!');
    res.send(student)
  } catch (err) {
    return res.status(404).send('ID is not found!');
 }
}

module.exports.studentDetail = studentDetail;