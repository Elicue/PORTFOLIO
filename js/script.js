"use strict"

// TODO --------------------CURSOR & SCROLLBAR--------------------

let mouseCursor = document.querySelector(".cursor");

let progress = document.getElementById('progressBar');
let TotalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

var className = "inverted";
var className2 = "bg";
var scrollTrigger = 1200;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger) {
    document.getElementsByClassName("cursor")[0].classList.add(className);
    document.getElementsByClassName("cursor")[0].classList.add(className2);
  } else {
    document.getElementsByClassName("cursor")[0].classList.remove(className);
    document.getElementsByClassName("cursor")[0].classList.remove(className2);
  }
  let progressHeight = (window.pageYOffset / TotalHeight) * 100;
  progress.style.height = getScrollPercent() + "%";
};

function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
return (h[st]) / ((h[sh]) - h.clientHeight) * 100;
}

// TODO --------------------CURSOR & SCROLLBAR--------------------