var _ = require('lodash');
var Information = require('./model/information');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.all = function(){
  return Information.loadPromotions();
};
