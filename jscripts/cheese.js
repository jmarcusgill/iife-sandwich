var SandwichMaker = (function(maker){

  var cheesePrices = {
    "swiss": .25,
    "cheddar": 1.20,
    "provalone": .75,
    "gouda": 1.00
  }

  maker.getCheese = function(cheeseType) {
    return cheesePrices[cheeseType]
  };



  return maker;
})(SandwichMaker || {});