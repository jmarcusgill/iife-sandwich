console.log("DOMhandler")

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the topping options
var breadChooser = document.getElementById("breadChooser");
var meatChooser = document.getElementById("meatChooser");
var cheeseChooser = document.getElementById("cheeseChooser");
var veggieChooser = document.getElementById("veggieChooser");
var condimentChooser = document.getElementById("condimentChooser");
var outputEl = document.getElementById("outputSandwich");
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var meatMoney = SandwichMaker.getMeat(event.target.value);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(meatMoney)
    outputEl.innerHTML = SandwichMaker.getTotalPrice();
  } else {
    SandwichMaker.removeTopping(meatMoney);
    outputEl.innerHTML = SandwichMaker.getTotalPrice();
  }





  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
  // console.log("event",selectedTopping)
  // return selectedTopping;
});