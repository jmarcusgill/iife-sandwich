var SandwichMaker = (function(maker){

  var breadPrices = {
    "white": .25,
    "rye": 1.20,
    "wheat": .75,
    "pita": 1.00
  }

  maker.getBread = function(breadType) {
    return breadPrices[breadType]
  };

  return maker;
})(SandwichMaker || {});