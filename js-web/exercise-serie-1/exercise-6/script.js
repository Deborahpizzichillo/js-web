//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

$(document).ready(function() {
    // Fisher–Yates Shuffle (Knuth variant)
    // To shuffle an array a of n elements (indices 0..n-1):
    //   for i from n - 1 downto 1 do
    //        j <- random integer with 0 <= j <= i
    //        exchange a[j] and a[i]

    // jQuery specific:
    // 1) remove elements from DOM and convert them into a native JavaScript array
    // 2) apply algorithm
    // 3) inject the array back to DOM

    var a = $("#deck > div").remove().toArray();
    for (var i = a.length - 1; i >= 1; i--) {
        var x = Math.floor(Math.random() * (i + 1));
        var bi = a[i];
        var bx = a[x];
        a[i] = bx;
        a[x] = bi;
    }
    $("#deck").append(a);
});

$(document).ready(function() {
    let crop = $('.crop');
    
      crop.each(function() {
          var maxWidth = 100; // Max width for the image
          var maxHeight = 100;    // Max height for the image
          var ratio = 0;  // Used for aspect ratio
          var width = $(this).width();    // Current image width
          var height = $(this).height();  // Current image height
    
          // Check if the current width is larger than the max
          if(width > maxWidth){
              ratio = maxWidth / width;   // get ratio for scaling image
              $(this).css("width", maxWidth); // Set new width
              $(this).css("height", height * ratio);  // Scale height based on ratio
              height = height * ratio;    // Reset height to match scaled image
              width = width * ratio;    // Reset width to match scaled image
          }
    
          // Check if current height is larger than max
          if(height > maxHeight){
              ratio = maxHeight / height; // get ratio for scaling image
              $(this).css("height", maxHeight);   // Set new height
              $(this).css("width", width * ratio);    // Scale width based on ratio
              width = width * ratio;    // Reset width to match scaled image
          }
      });
})