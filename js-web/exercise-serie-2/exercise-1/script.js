//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function slideShow(){
// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://aws.random.cat/meow', true);

request.onload = function () {
    let data = JSON.parse(this.response)

    document.getElementById("imageid").src = data.file;

 }


// Send request
request.send();
}

setInterval(slideShow, 3000);