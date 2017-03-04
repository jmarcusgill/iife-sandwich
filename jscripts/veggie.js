var SandwichMaker = (function(maker){

  var veggiePrices = {
    "lettuce": .25,
    "tomato": 1.20,
    "onion": .75,
    "pickles": 1.00
  }

  maker.getVeggie = function(veggieType) {
    return veggiePrices[veggieType]
  };

  return maker;
})(SandwichMaker || {});