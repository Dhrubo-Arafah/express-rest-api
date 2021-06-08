//Express
const express = require('express');
const app = express();
const fs = require('fs');
const db = require('./db')
app.use(express.json());

//Assigning Port
const port = 3000

//Making Get Request
app.get('/', (req, res) => {
  res.send("Hello from express.js!")
})

app.get('/api/students', (req, res) => {
  db.getDBStudents()
    .then(students => res.send(students))
});

//Making Post Request
app.post('/api/students', (req, res) => {
  const student = req.body;

  db.getDBStudents()
    .then(students => {
    students.push(student);
      db.insertDBStudent(students)
      .then(data=>res.send(student))
  });
});

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});