jest.dontMock('../src/model/cart-item');
jest.dontMock('lodash');

describe('CartItem', function() {
  var cart;
  var cartItem;
  beforeEach(function() {
    CartItem = require('../src/model/cart-item');
    var item = {
      'barcode' : 'ITEM000001',
      'name' : '雪碧',
      'unit' : '瓶',
      'price' : 3.00,
    };
    var count = 5;
    cartItem = new CartItem(item, count);
  });

  describe('#toInventoryText()', function() {

    it('should return correct string', function() {

      cartItem.promotionCount = 1;

      var expectInventoryText = '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n';
      var result = cartItem.toInventoryText();
      expect(expectInventoryText).toBe(result);
    });
  });
  describe('#getPromotionText', function() {

    it('should return promotionText will null', function() {

      var result = cartItem.getPromotionText();

      expect(result).toBe('');
    });

    it('should return promotionText', function() {

      cartItem.promotionCount = 1;

      var expectPromotionText = '名称：雪碧，数量：1瓶\n';

      var result = cartItem.getPromotionText();
      expect(expectPromotionText).toBe(result);
    });
  });
});
