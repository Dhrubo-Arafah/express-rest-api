//Express
const express = require('express');
const studentRouter = require('./routers/studentRouter')
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-student-2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected To MongoDB!"))
  .catch(err => console.error("MongoDB Connection Failed!"));

//Defining Built-in Middlewares
app.use(express.json()); //POST/PUT/PATCH -> JSON Object -> Req
app.use('/api/students', studentRouter);

//Defining Custom Middleware
app.use((req, res, next) => {
  console.log("I'm Middleware 1!");
  next(); //Help to pass middleware to the next middleware
})

//Defining Third-Party Middleware
app.use(morgan('dev'));

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

//Mongoose -> Model -> Collection
//Import Model
//Connect Database