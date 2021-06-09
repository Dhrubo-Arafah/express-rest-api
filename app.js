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

//Assigning Port
const port = 3000

//Making Get Request
app.get('/', (req, res) => {
  res.send("Hello from express.js!")
})

app.get('/api/students', studentList);

//Making Post Request
app.post('/api/students', newStudent);

//Making Get request for a single student
app.get('/api/students/:id', studentDetail)

//Making Put Request
app.put('/api/students/:id', updatedStudents);

//Making Delete Request
app.delete('/api/students/:id', studentDelete)

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});