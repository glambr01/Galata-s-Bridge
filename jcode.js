function toggleNav() {
  var nav = document.getElementById("nav");
  var icons = document.getElementsByClassName("navtext");
  if (nav.style.width === "250px") {
    nav.style.width = "0";
  } else {
    nav.style.width = "250px";
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.color = "white";
    }
  }
}
