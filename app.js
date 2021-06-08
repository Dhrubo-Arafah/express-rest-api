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
        .then(data => res.send(student))
    });
});

//Making Get request for a single student
app.get('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.getDBStudents()
    .then(students => {
      const student = students.find(std => std.id === id);
      if (!student) res.status(404).send("No Student Found With This ID");
      else res.send(student);
    })
})


//Making Put Request
app.put('/api/students/:id', (req, res) => {
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
});

//Making Delete Request
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.getDBStudents().then(students => {
    const student = students.find(student => student.id === id);
    if (!student) res.status(404).send("No Student Found With this ID");
    const updatedStudents = students.filter(student => student.id !== id);
    db.insertDBStudent(updatedStudents)
    .then(msg=>res.send(updatedStudents))
  })
})

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});