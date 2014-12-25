jest.dontMock('../src/model/promotion-util');
jest.dontMock('../src/model/cart');
jest.dontMock('lodash');

describe('Cart', function() {
  var cart;
  var cartItem;
  beforeEach(function() {
    var Cart = require('../src/model/cart');
    cart = new Cart();
    cartItem = {
      'item' : {
        'barcode' : 'ITEM000001',
      },
      'count' : 1,
    };
  });
  describe('#addCartItem()', function() {

    it('should return cartItems', function() {

      cart.addCartItem(cartItem);
      expect(cart.cartItems).not.toBeNull();
    });

    it('should return cartItem.count add 1', function() {

      cart.cartItems = [cartItem];

      cart.addCartItem(cartItem);
      expect(cart.cartItems[0].count).toBe(2);
    })
  });
  describe('#getCartItemsText()', function() {
    it('should return cartItemsText', function() {

      var toInventoryText = jest.genMockFn();
      toInventoryText.mockReturnValue('print');

      cartItem.toInventoryText = toInventoryText;
      cart.cartItems = [cartItem,cartItem];

      var result = cart.getCartItemsText();

      var cartItemsText = 'print' +
                          'print';

      expect(cartItemsText).toBe(result);
    })
  });
  describe('#getPromotionsText()', function() {
    it('should return promotionsText', function() {

    })
  });
});
