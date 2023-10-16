/*    JavaScript 7th Edition
      Chapter 3
      Project 03-05

      Application to generate a horizontal bar chart
      Author: Ulfany Furcal
      Date:   02/10/2023

      Filename: project03-05.js
*/

// Array of phone models sold by the company
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"];

// Units sold in the previous quarter
let sales = [10281, 12255, 25718, 21403, 16142];

// Variable to calculate total sales
let totalSales = 0;

// Use the forEach() method to sum the sales for each phone model and add it to the totalSales variable
sales.forEach(addToTotal);

// For loop to generate bar chart of phone sales
for (let i = 0; i < phones.length; i++) {
   let barChart = "";   // Variable to store HTML code for table cells used to create bar chart
   
   // Calculate the percent of total sales for a particular phone model
   let barPercent = Math.floor(100 * sales[i] / totalSales);
   
   let cellTag;   // Variable that will define the class of td elements used in creating the bar chart cells.
   
   // Determine the table cell based on the value of the phone model
   switch (phones[i]) {
      case "Photon 6E": cellTag = "<td class='group1'>"; break;
      case "Photon 6X": cellTag = "<td class='group2'>"; break;
      case "Photon 7E": cellTag = "<td class='group3'>"; break;
      case "Photon 7X": cellTag = "<td class='group4'>"; break;
      case "Photon 8P": cellTag = "<td class='group5'>"; break;        
    }
   
   // Table cell containing information on phone and total sales (formatted using a thousands-separator)
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";
   
   // For loop to create a table cell, 1 for each percentage value in the barPercent variable
   for (let j = 0; j < barPercent; j++) {
      barChart += cellTag + "</td>";
    }
    barChart += "</tr>";

   // Insert the barChart HTML code into first tbody element in the web document
   document.querySelector("tbody").insertAdjacentHTML("beforeend", barChart);
}

// Callback function that adds the value of each array element to the totalSales variable
function addToTotal(arrValue) {
   totalSales += arrValue;
 }

// Function that takes a number value and returns it as a text string with a thousands separator
function formatNumber(value) {
   return value.toLocaleString();
 }
