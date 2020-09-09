const bookshelf = require('../bookshelf');

const Shopper = bookshelf.model('Shopper', {
  tableName: 'shoppers',
  shoppinglists: function () {
    return this.hasMany('Shoppinglists');
  },
});

module.exports = Shopper;
