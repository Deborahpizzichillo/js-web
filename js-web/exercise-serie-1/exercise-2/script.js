//Check to see if script is linked properly.
console.log("This script is linked properly!")


    //Write your JS code here...
function calc(){

let n1 = parseFloat(document.getElementById("n1").value)
let n2 = parseFloat(document.getElementById("n2").value)


let op = document.getElementById("opr").value

if(op === "+"){

document.getElementById('result').value = n1+n2;

}
if(op === "-"){

document.getElementById('result').value = n1-n2;

}
if(op === "x"){

document.getElementById('result').value = n1*n2;

}
if(op === "/"){

document.getElementById('result').value = n1/n2;

}

return;
}

