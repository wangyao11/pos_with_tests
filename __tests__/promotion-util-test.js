jest.dontMock('../src/model/promotion-util');
jest.dontMock('../src/model/promotion');
jest.dontMock('lodash');

describe('promotion-util', function() {
  var PromotionUtil;

  beforeEach(function() {
    PromotionUtil = require('../src/model/promotion-util');
  });

  describe('.judgeCartItem()', function() {

    it('should return promotion number', function() {

      var getPromotionCount = jest.genMockFn();
      getPromotionCount.mockImplementation(function() {
        this.promotionCount = 1;
      });

      var cartItem = {
        'item' : {
          'barcode' : 'ITEM000001',
        },
        'count' : 5,
        'promotionCount' : 0,
        getPromotionCount : getPromotionCount
      };

      PromotionUtil.judgeCartItem(cartItem);

      expect(cartItem.promotionCount).toBe(1);
    });
  });

  describe('.getPromotionType()', function() {

    it('should return promotion type',function() {

      var cartItem = {
        'item' : {
          'barcode' : 'ITEM000001',
        },
        'count' : 5,
      };

      var result = PromotionUtil.getPromotionType(cartItem);

      expect('BUY_TWO_GET_ONE_FREE').toBe(result);
    });
  });
});
