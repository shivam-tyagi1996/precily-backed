const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const router = require('./controller/router');

// creates the application
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cors());
config();

// connect to the database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/health-check', (req, res) => { res.send('Welcome to app.'); });

// connects all the routes to the main application
app.use('/user', router);

// check if database is connected, after that it starts the application
mongoose.connection.on('connected', function () {
  console.log('Database connected!!');
  app.listen(process.env.PORT, () => {
    console.log(`App started at port ${process.env.PORT}.`);
  });
});

mongoose.connection.on('error', function (err) {
  console.log('Database not connected with error:', err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Database disconnected!!');
});
