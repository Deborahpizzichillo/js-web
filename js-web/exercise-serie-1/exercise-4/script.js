//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function getAge() {
    year = document.getElementById('year').value;
    month = document.getElementById('month').value;
    day = document.getElementById('day').value;
    let date = month + "/" + day + "/" + year;
  
  if(isValidDate(date)) {
    document.getElementById("age").innerHTML = getAge2(year + "/" + month + "/" + day);
    
  }
  else {
    document.getElementById("age").innerHTML = "Invalid date!";
  }
  }
  
  function getAge2(dateString) {
     let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }
  
  function isValidDate(dateString)
  {
      //controle eerste patroon
      if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
          return false;
  
      // Parse the date parts to integers (gehele getalen)
     let parts = dateString.split("/");
      let day = parseInt(parts[1], 10);
      let month = parseInt(parts[0], 10);
      let year = parseInt(parts[2], 10);
  
      // reeksen nakijken op maand en jaar
      if(year < 1000 || year > 3000 || month == 0 || month > 12)
          return false;
  
      let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  
      //Make your components smart by making it impossible to enter a date that doesn't exist.
      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;
  
      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
  };