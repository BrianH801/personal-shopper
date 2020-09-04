require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();

// grab .env variables
const { HOST, DB_USER, PASSWORD, DB } = process.env;

app.use(express.json());

// MySQL connection config, store connection in a variable to access methods like: connection.query()
const connection = mysql.createConnection({
  host: HOST,
  user: DB_USER,
  password: PASSWORD,
  database: DB,
  multipleStatements: true,
});

// init connection to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log(`db connected ✅`);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Personal Shopper Server',
    routes: [`http://localhost:5000/users`],
  });
});

app.get(`/users`, (req, res) => {
  connection.query('SELECT * FROM users', (err, data) => {
    if (err) throw err;
    if (!data.length) {
      res.json({ message: 'no data' });
    }
    res.json({ data });
  });
});

app.get(`/users/:id`, (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT * FROM users WHERE users.id = ${id}`,
    (err, data) => {
      if (err) throw err;
      if (!data.length) {
        res.json({ message: 'no data' });
      } else {
        res.json({ data });
      }
    }
  );
});
