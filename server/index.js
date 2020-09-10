const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql');
const knex = require('./knexfile');

const app = express();

const shopperRoute = require('./routes/shopper');
const shoppinglistRoute = require('./routes/shoppinglist');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// cors support
app.use(cors());

require('dotenv').config();

//body parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/shopper', shopperRoute);
app.use('/api/shoppinglist', shoppinglistRoute);

let connection;
// make connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(knex.development);
}

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

connection.connect((err) => {
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
