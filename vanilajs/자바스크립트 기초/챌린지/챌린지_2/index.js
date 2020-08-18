const colors = ["#EEBC12", "#914EAC", "#2E8CD5"];

const title = document.querySelector("h2");
const html = document.querySelector("html");
title.style.color = "white";

function resizeHandler(event) {
  if (window.innerWidth > 1200) {
    html.style.backgroundColor = colors[0];
  } else if (window.innerWidth > 800) {
    html.style.backgroundColor = colors[1];
  } else {
    html.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", resizeHandler);
