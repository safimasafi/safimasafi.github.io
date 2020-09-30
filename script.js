document.getElementById("inspo").addEventListener("mouseover", mouseOver);
document.getElementById("inspo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("inspo").style.color = "darkgray";
}

function mouseOut() {
  document.getElementById("inspo").style.color = "ghostwhite";
}