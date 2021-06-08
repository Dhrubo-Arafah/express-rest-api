//Express
const express = require('express');
const app = express();

//Making Get Request
app.get('/', (req, res) => {
  res.send("Hello from express js");
})

app.get('/another', (req, res) => {
  res.send("Hello from another");
})

app.get('/student', (req, res) => {
  res.send(JSON.stringify(["Rahim", "Karim"]));
})

//Adding Port
const port = 3000;

//Creating Listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

