

function myFunction() {
  var x = document.getElementById("myMobilenav");
  if (x.className === "mobilenav") {
    x.className += " responsive";
  } else {
    x.className = "mobilenav";
  }
}