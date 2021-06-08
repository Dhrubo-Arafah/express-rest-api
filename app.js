//Express
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

//Assigning Port
const port = 3000

//Making Get Request
app.get('/', (req, res) => {
  res.send("Hello from express.js!")
})

app.get('/api/students', (req, res) => {
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    console.log(data);
    const students = JSON.parse(data).students;
    res.send(students);
  })
});

//Making Post Request
app.post('/api/students', (req, res) => {
  const student = req.body;
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    const students = JSON.parse(data);
    students.students.push(student);
    fs.writeFile('./db.json', JSON.stringify(students), (err) => {
      res.send(student);
    });
  });
});

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});