"use strict"

let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

var className = "inverted";
var className2 = "bg";
var scrollTrigger = 1000;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger) {
    document.getElementsByClassName("cursor")[0].classList.add(className);
    document.getElementsByClassName("cursor")[0].classList.add(className2);
  } else {
    document.getElementsByClassName("cursor")[0].classList.remove(className);
    document.getElementsByClassName("cursor")[0].classList.remove(className2);
  }
};