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

      var getCartItemsText = jest.genMockFn();
      var cartItemsText = '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n';
      getCartItemsText.mockReturnValue(cartItemsText);

      var Cart ={
        getCartItemsText : getCartItemsText
      }

      result = Cart.getCartItemsText(cartItem);

      expect(cartItemsText).toBe(result);
    })
  });

});
