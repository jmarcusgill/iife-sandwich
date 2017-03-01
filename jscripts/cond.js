var SandwichMaker = (function(maker){

  var condPrices = {
    "mayo": .25,
    "mustard": 1.20,
    "italian": .75,
    "sriracha": 1.00
  }

  maker.getCond = function(condType) {
    return condPrices[condType]
  };



  return maker;
})(SandwichMaker || {});