const express = require('express');
const Shoppinglist = require('../models/shoppinglist');
const Shopper = require('../models/shopper');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Shoppinglist.fetchAll({ withRelated: ['shopper'] }).then(
      (shoppinglists) => {
        res.status(200).json(shoppinglists);
      }
    );
  })
  .post((req, res) => {
    new Shoppinglist({
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      flyer_item: req.body.flyer_item,
      shopper_id: req.body.shopper_id,
    })
      .save()
      .then((newShoppinglist) => {
        res.status(201).json({ newShoppinglist });
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    Shoppinglist.where('id', req.params.id)
      .fetch({ withRelated: ['shopper'] })
      .then((shoppinglist) => {
        res.status(200).json({ shoppinglist });
      });
  })
  .put((req, res) => {
    Shoppinglist.where('id', req.params.id)
      .fetch()
      .then((shoppinglist) => {
        shoppinglist
          .save({
            description: req.body.description
              ? req.body.description
              : shoppinglist.description,
            price: req.body.price ? req.body.price : shoppinglist.price,
            quantity: req.body.quantity
              ? req.body.quantity
              : shoppinglist.quantity,
            flyer_item: req.body.flyer_item
              ? req.body.flyer_item
              : shoppinglist.flyer_item,
            shopper_id: req.body.shopper_id
              ? req.body.shopper_id
              : shoppinglist.shopper_id,
          })
          .then((updatedShoppinglist) => {
            res.status(200).json({ updatedShoppinglist });
          });
      });
  })
  .delete((req, res) => {
    Shoppinglist.where('id', req.params.id)
      .destroy()
      .then((deletedShoppinglist) => {
        res.status(200).json({ deletedShoppinglist });
      });
  });

module.exports = router;
