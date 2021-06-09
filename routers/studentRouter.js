const express = require('express')
const router = express.Router()

const { newStudent } = require('../actions/student/newStudent');
const { studentDelete } = require('../actions/student/studentDelete');
const { studentDetail } = require('../actions/student/studentDetail');
const { studentList } = require('../actions/student/studentList');
const { updatedStudents } = require('../actions/student/updatedStudent');


router.route('/').get(studentList).post(newStudent)
router.route('/:id').get(studentDetail).put(updatedStudents).delete(studentDelete)

module.exports = router;