//Express
const express = require('express');
const app = express();
const fs = require('fs');
const { newStudent } = require('./actions/newStudent');
const { studentDelete } = require('./actions/studentDelete');
const { studentDetail } = require('./actions/studentDetail');
const { studentList } = require('./actions/studentList');
const { updatedStudents } = require('./actions/updatedStudent');

app.use(express.json());
app.route('/api/students').get(studentList).post(newStudent)
app.route('/api/students/:id').get(studentDetail).put(updatedStudents).delete(studentDelete)

//Assigning Port
const port = 3000

//Making Get Request
app.get('/', (req, res) => {
  res.send("Hello from express.js!")
})

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});