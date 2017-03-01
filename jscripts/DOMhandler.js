// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the topping options
var breadChooser = document.getElementById("breadChooser");
var meatChooser = document.getElementById("meatChooser");
var cheeseChooser = document.getElementById("cheeseChooser");
var veggieChooser = document.getElementById("veggieChooser");
var condChooser = document.getElementById("condimentChooser");
var makeSandwich = document.getElementById("btn");
var outputEl = document.getElementById("outputSandwich");
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  var breadMoney = SandwichMaker.getBread(event.target.value);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(breadMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  } else {
    SandwichMaker.removeTopping(breadMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  }
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var meatMoney = SandwichMaker.getMeat(event.target.value);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(meatMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  } else {
    SandwichMaker.removeTopping(meatMoney);
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  }
});

cheeseChooser.addEventListener("change", function(event) {
  var cheeseMoney = SandwichMaker.getCheese(event.target.value);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(cheeseMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  } else {
    SandwichMaker.removeTopping(cheeseMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  }
});

veggieChooser.addEventListener("change", function(event) {
  var veggieMoney = SandwichMaker.getVeggie(event.target.value);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(veggieMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  } else {
    SandwichMaker.removeTopping(veggieMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  }
});

condChooser.addEventListener("change", function(event) {
  var condMoney = SandwichMaker.getCond(event.target.value);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(condMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  } else {
    SandwichMaker.removeTopping(condMoney)
    // outputEl.innerHTML = SandwichMaker.getTotalPrice();
  }
});

makeSandwich.addEventListener("click", function(){
  finalSandwichPrice = SandwichMaker.getTotalPrice();
  outputEl.innerHTML = `Your total price is: ${finalSandwichPrice}`;
})

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
  // console.log("event",selectedTopping)
  // return selectedTopping;