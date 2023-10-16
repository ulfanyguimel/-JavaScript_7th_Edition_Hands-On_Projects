/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Ulfany Furcal
      Date:   1/28/2023
      
      Filename: project02-04.js
 */

var CHICKEN_PRICE = 10.95;
var HALIBUT_PRICE = 13.95;
var BURGER_PRICE = 9.95;
var SALMON_PRICE = 18.95;
var SALAD_PRICE = 7.95;
var SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}


document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

function calcTotal() {
    var cost = 0;
    var buyChicken = document.getElementById('chicken').checked;
    var buyHalibut = document.getElementById('halibut').checked;
    var buyBurger = document.getElementById('burger').checked;
    var buySalmon = document.getElementById('salmon').checked;
    var buySalad = document.getElementById('salad').checked;

    cost += buyChicken ? CHICKEN_PRICE : 0;
    cost += buyHalibut ? HALIBUT_PRICE : 0;
    cost += buyBurger ? BURGER_PRICE : 0;
    cost += buySalmon ? SALMON_PRICE : 0;
    cost += buySalad ? SALAD_PRICE : 0;

    document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

    var tax = cost * SALES_TAX;
    document.getElementById('foodTax').innerHTML = formatCurrency(tax);

    var totalCost = cost + tax;
    document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);

}

