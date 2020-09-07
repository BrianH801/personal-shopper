require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const SpoonacularApi = require('spoonacular_api');
const app = express();

// grab .env variables
const { HOST, DB_USER, PASSWORD, DB, API_KEY } = process.env;

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

const api = new SpoonacularApi.DefaultApi();
const q = '';
const callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. returned data: ' + data);
  }
  console.log(q);
  api.analyzeARecipeSearchQuery(q, callback);
};

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Personal Shopper Server',
    routes: [`http://localhost:5000/users`],
  });
});

app.get(`/shoppinglists`, (req, res) => {
  connection.query('SELECT * FROM shoppinglists', (err, data) => {
    if (err) throw err;
    if (!data.length) {
      res.json({ message: 'no data' });
    }
    res.json({ data });
  });
});

app.get(`/shoppinglists/:id`, (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT * FROM shoppinglists WHERE shoppinglists.id = ${id}`,
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
    `SELECT * FROM users WHERE user.id = ${id};
     SELECT * FROM shoppinglists WHERE shoppinglists.user_id = ${id};`,
    (err, data) => {
      if (err) throw err;
      if (data[0].length && data[1].length) {
        res.json({ user: data[0], shoppinglist: data[1] });
      } else {
        res.json({ message: 'no data' });
      }
    }
  );
});

app.listen(5000, console.log(`http://localhost:5000`));
