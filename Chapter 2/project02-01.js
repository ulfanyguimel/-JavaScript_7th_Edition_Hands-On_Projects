/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Ulfany Furcal
      Date:   1/28/2023  

      Filename: project02-01.js
 */
      function FahrenheitToCelsius(degree){
            return (degree-18)/1.8;
      }
      
      function CelsiusToFahrenheit(degree){
            return degree*1.8 +32;
      }
      
      
      
      document.getElementById("cValue").onchange =  function(){
            var cDegree = document.getElementById("cValue").value;
            document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree) ;
      };
      
      document.getElementById("fValue").onchange =  function(){
            var fDegree = document.getElementById("fValue").value;
            document.getElementById("cValue").value = FahrenheitToCelsius(fDegree) ;
      };
