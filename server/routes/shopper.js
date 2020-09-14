const express = require('express');

const Shopper = require('../models/shopper');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Shopper.fetchAll({ withRelated: ['shoppinglists'] }).then((shoppers) => {
      res.status(200).json(shoppers);
    });
  })
  .post((req, res) => {
    new Shopper({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
    })
      .save()
      .then((newShopper) => {
        res.status(201).json({ newShopper });
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    Shopper.where('id', req.params.id)
      .fetch({ withRelated: ['shoppinglists'] })
      .then((shopper) => {
        res.status(200).json(shopper);
      });
  })
  .put((req, res) => {
    Shopper.where('id', req.params.id)
      .fetch()
      .then((shopper) => {
        shopper
          .save({
            name: req.body.name ? req.body.name : shopper.name,
            address: req.body.address ? req.body.address : shopper.address,
            phone: req.body.phone ? req.body.phone : shopper.phone,
            email: req.body.email ? req.body.email : shopper.email,
          })
          .then((updatedShopper) => {
            res.status(200).json({ updatedShopper });
          });
      });
  })
  .delete((req, res) => {
    Shopper.where('id', req.params.id)
      .destroy()
      .then((deletedShopper) => {
        res.status(200).json({ deletedShopper });
      });
  });

module.exports = router;
