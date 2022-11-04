"use strict"

// TODO --------------------SCROLLBAR--------------------

let mouseCursor = document.querySelector(".cursor");

let progress = document.getElementById('progressBar');
let TotalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

window.onscroll = function() {
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

// TODO --------------------SCROLLBAR--------------------