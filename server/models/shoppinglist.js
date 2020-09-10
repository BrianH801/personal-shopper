const bookshelf = require('../bookshelf');

const Shoppinglists = bookshelf.model('Shoppinglists', {
  tableName: 'shoppinglists',
  shopper: function () {
    return this.belongsTo('Shopper');
  },
});

module.exports = Shoppinglists;
