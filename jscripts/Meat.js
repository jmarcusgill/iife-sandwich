// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    "turkey": 1.00,
    "ham": .75,
    "salami": .25,
    "roastbeef": .50
  };

  // Augment the original object with another method
  maker.getMeat = function(meatType) {
    return meatPrices[meatType];
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);