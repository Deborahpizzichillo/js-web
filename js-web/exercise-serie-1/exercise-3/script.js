//Check to see if script is linked properly.
console.log("This script is linked properly!")

let resetfield = document.getElementById("form").innerHTML;

//Write your JS code here...

function display() {
    let vilainname = document.getElementById('vilainname').value;
    let superpower = document.getElementById('superpower').value;
    let motivation = document.getElementById('motivation').value;
    let plan = document.getElementById('plan').value;
    document.getElementById("form").innerHTML =
    "Vilain name: " + vilainname + "<br>" +
    "Super power: " + superpower + "<br>" +
    "Motivation: " + motivation + "<br>" +
    "Plan to take over the world: " + plan;
    //document.getElementById("form").remove();
  }
  
  function reset() {
    document.getElementById("form").innerHTML = resetfield;
  }
  