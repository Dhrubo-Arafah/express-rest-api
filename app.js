//Express
const express = require('express');
const studentRouter = require('./routers/studentRouter')
const morgan = require('morgan')
const app = express();

//Defining Built-in Middlewares
app.use(express.json()); //POST/PUT/PATCH -> JSON Object -> Req
app.use(express.urlencoded({ extended: true })); // id=1&&name=something
app.use(express.static('public')); //Handle Static File
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