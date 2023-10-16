/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Ulfany Furcal
      Date:   02/12/2023   

      Filename: project04-05.js
 */


// Function to convert degrees to radians
function degreesToRadians(degrees) {
   return degrees*Math.PI/180;
   }
   
   // Function to convert radians to degrees
   function radiansToDegrees(radians) {
   return radians*180/Math.PI;
   }
   
   // Event handler that converts radians to degrees when the input box is changed
   document.getElementById("rValue").onchange = function() {
   let radians = document.getElementById("rValue").value;
   console.log("Radians:", radians, "radians");
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
   }
   
   // Event handler that converts degrees to radians when the input box is changed
   document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   console.log("Degrees:", degrees, "degrees");
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
   }
   
   // Function to display a numeric value in the format ##.###
   function formatValue3(value) {
   return value.toFixed(3);
   }

   /*
   I fixed the syntax errors by adding missing parentheses and correcting 
   the spelling of radian to radians. I also changed the value of PI from 80 
   to Math.PI to correctly represent the mathematical constant pi. I also 
   added calls to .toFixed(3) to format the values to 3 decimal places. 
   Finally, I added console.log statements to write the values of radians 
   and degrees to the debugger console in the required format.
   */