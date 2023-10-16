"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Ulfany Furcal
      Date:   2/18/2023  

      Filename: project05-02.js
*/
// declare variables
const images = document.getElementsByTagName('img');
const photoBucket = document.getElementById('photo_bucket');
const photoList = document.getElementById('photo_list');

for (let i = 0; i < images.length; i++) {
      images[i].onclick = function() {
        // check if the parent element of the clicked image is the photo bucket
        if (this.parentElement === photoBucket) {
          // create a new list item and append it to the photo list
          const newItem = document.createElement('li');
          photoList.appendChild(newItem);
          // move the image to the new list item
          newItem.appendChild(this);
        } else { // the parent element is the photo list
          // move the image back to the photo bucket
          const oldItem = this.parentElement;
          photoBucket.appendChild(this);
          oldItem.parentElement.removeChild(oldItem);
        }
      };
    }
    