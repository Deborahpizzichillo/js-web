//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
console.log("This script is linked properly!")


//Write your JS code here...
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function setAspectRatio(img, expected) {
    
	if ( img.naturalWidth === 'undefined' ) return;
	
	// Get natural dimensions of image
	var width = img.naturalWidth;
	var height = img.naturalHeight;
	
	// Examine if width is larger than height then reduce the width but fix the height
	if ( width > height ) {
		img.style.width = (width / height * expected) + 'px';
		img.style.height = expected + 'px';
		
		// horizontally center the image
		img.style.transform = 'translatex(-' + parseInt((width / height * expected) - expected) + 'px)';
		img.style.webkitTransform = 'translateX(-' + parseInt((width / height * expected) - expected) + 'px)';
		return img;
	}
	
	// Examine if height is larger than width then reduce the height but fix the width
	else if ( height > width ) {
		img.style.width = expected + 'px';
		img.style.height = (height / width * expected) + 'px';
		
		// vertically center the image
		img.style.transform = 'translateY(-' + parseInt((height / width * expected) - expected) + 'px)';
		img.style.webkitTransform = 'translateY(-' + parseInt((height / width * expected) - expected) + 'px)';
		return img;
	}
	
	// Or return fix width and height
	else {
		img.style.width = expected + 'px';
		img.style.height = expected + 'px';
	}
}
