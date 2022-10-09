"use strict"

// -------------------------CURSOR-------------------------

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

// -------------------------CURSOR-------------------------
// -------------------------SCROLLBAR-------------------------

let progress = document.getElementById('progressBar');
let TotalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / TotalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// -------------------------SCROLLBAR-------------------------
// -------------------------LINE-------------------------

let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path .style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {

  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;

})

// -------------------------LINE-------------------------