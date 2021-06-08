//Express
const express = require('express');
const app = express();
const fs = require('fs');

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

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})