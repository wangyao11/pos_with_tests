var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');

function Scanner() {

}
Scanner.prototype.scan = function(tag) {
  var allItems = Item.all();
  var tagArray = tag.split("-");
  var barcode = tagArray[0];
  var count = 1;
  if (tagArray[1]) {
    count = parseFloat(tagArray[1]);
  }

  var item = _.find(allItems, {barcode : barcode});
  var cartItem = new CartItem(item, count);
  return cartItem;
};

module.exports = Scanner;
