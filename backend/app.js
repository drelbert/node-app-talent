
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');

const app = express();

mongoose.connect('mongodb+srv://talentAppSuperAdmin:elCdmoGxRaR9OMZn@cluster0-p6czb.gcp.mongodb.net/talentApp?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to DB.')
  })
  .catch(() => {
    console.log('Connection FAILED.');
  });

//Middleware chain, note that next is also function to allow continuation to next middleware
//When sending a res, never use next so no execution of res related code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/courses', adminRoutes);


module.exports = app;


// elCdmoGxRaR9OMZn