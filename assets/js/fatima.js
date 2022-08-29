/* modal */

var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
} 