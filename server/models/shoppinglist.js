const bookshelf = require('../bookshelf');

const Shoppinglists = bookshelf.model('Shoppinglists', {
  tableName: 'shoppinglists',
  shoppers: function () {
    return this.belongsTo('Shopper');
  },
});

module.exports = Shoppinglists;
