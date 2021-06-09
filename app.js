//Express
const express = require('express');
const studentRouter = require('./routers/studentRouter')

const app = express();
app.use(express.json());
app.use('/api/students', studentRouter);

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