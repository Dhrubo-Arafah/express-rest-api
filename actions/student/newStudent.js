const { Student } = require('../../models/students')

const newStudent = async (req, res) => {
  const student = new Student(req.body)
  try{
    const result = await student.save();
    res.send(result);
  } catch (err) {
    const errMsgs = [];
    for (field in err.errors) {
      errMsgs.push(err.errors[field].message);
    }
    return res.status(400).send(errMsg);
  }
}

module.exports.newStudent = newStudent;