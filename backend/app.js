const express = require('express');
const bodyParser = require('body-parser');

const coursesRoutes = require('./routes/admin');

const app = express();

//Middleware chain, note that next is also function to allow continuation to next middleware
//When sending a res, never use next so no execution of res related code
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/courses', coursesRoutes);

module.exports = app;
