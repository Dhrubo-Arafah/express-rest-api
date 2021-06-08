const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from express js");
})

app.get('/another', (req, res) => {
  res.send("Hello from another");
})

app.get('/student', (req, res) => {
  res.send(JSON.stringify(["Rahim", "Karim"]));
})

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

