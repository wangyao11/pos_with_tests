jest.dontMock('../src/model/scanner');
jest.dontMock('../src/model/cart-item');
jest.dontMock('../src/model/item');
jest.dontMock('lodash');
describe('Scanner', function() {

  describe('#scan()', function() {

    it('should return cartItem Object', function(){

      var Scanner = require('../src/model/scanner');

      var scanner = new Scanner();

      var cartItem = scanner.scan('ITEM000001');

      // var expectCartItem = [{'barcode':'ITEM000001', 'name':'雪碧', 'unit':'瓶'， 'price':3},
      //   'count':1}];
      expect(cartItem.count).toBe(1);
      expect(cartItem.item.barcode).toBe('ITEM000001');
      expect(cartItem.item.name).toBe('雪碧');
      expect(cartItem.item.unit).toBe('瓶');
      expect(cartItem.item.price).toBe(3);

    });
  });
});
