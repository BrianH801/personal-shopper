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

// const api = new SpoonacularApi.DefaultApi();
// const q = '';
// const callback = function (error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. returned data: ' + data);
//   }
//   console.log(q);
//   api.analyzeARecipeSearchQuery(q, callback);
// };

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
    `SELECT * FROM users WHERE users.id = ${Number(id)};
     SELECT * FROM shoppinglists WHERE shoppinglists.user_id = ${Number(id)};`,
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

app.post('/users/', (req, res) => {
  const { name, address, phone, email, credit_card, expiry_date } = req.body;
  console.log(req.body);
  if (name && address && phone && email && credit_card && expiry_date) {
    connection.query(
      `INSERT INTO users
      (name, address, phone, email, credit_card, expiry_date) VALUES (
        '${name}','${address}','${phone}','${email}','${credit_card}','${expiry_date}');`,
      (err, data) => {
        console.log('data', data.affectedRows);
        if (err) throw err;
        if (data) {
          res.json({ data });
        } else {
          res.json({ message: 'no data' });
        }
      }
    );
  } else {
    res.status(401).json({
      message:
        'please provide a name, address, phone number, email address, credit card, and expiry date',
    });
  }
});

app.post('/shoppinglists/', (req, res) => {
  const { description, price, quantity, flyer_item, user_id } = req.body;
  console.log(req.body);
  if (description && price && quantity && flyer_item && user_id) {
    connection.query(
      `INSERT INTO shoppinglists
      (description, price, quantity, flyer_item, user_id) VALUES (
        '${description}','${price}','${quantity}','${flyer_item}','${user_id}'
      );`,
      (err, data) => {
        console.log('data', data.affectedRows);
        if (err) throw err;
        if (data) {
          res.json({ data });
        } else {
          res.json({ message: 'no data' });
        }
      }
    );
  } else {
    res.status(401).json({
      message:
        'please privide a description, price, quantity, flyer_item, and user_id',
    });
  }
});

app.listen(5000, console.log(`http://localhost:5000`));
