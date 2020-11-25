
// Define our button - it will never be reassigned so its a const.
const topButton = document.getElementById('go-top-button');
//
// Function to check how far down you are scrolled on the page
//
function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}
// Add Event Listener for Scroll, everytime you scroll it runs this function
window.addEventListener('scroll', scrollFunction);
//
// Function to scroll the page back to the top
//
function scrollToTop() {
  document.documentElement.scrollTop = 0; 
}
// Add Event Listener for Click, everytime you click it runs this function
topButton.addEventListener('click', scrollToTop);


//
//
//
//Click Next - Getting Elements from the DOM (Document Object Model) and Changing the CSS (to edit the style property)
//The second half of the form was configured using css to not be displayed (display: none)
function ShowBusinessDetailsForm() {
  //Hiding Form 1 Personal Details - using 'display: none'
  document.getElementById("form1").style.display = "none";
  document.getElementById("form1title").style.display = "none";
  document.getElementById("GetInvolvedIntroText").style.display = "none";
  //Showing Form 2 Business Details Form - using 'display: block'
  document.getElementById("form2title").style.display = "block";
  document.getElementById("form2").style.display = "block";
  document.getElementById("form2tandc").style.display = "block";
  document.getElementById("form2submit").style.display = "block";
  //Scroll to top
  document.documentElement.scrollTop = 0; 
  //Change colour of Next button to Grey
  document.getElementById("nextButton").style.backgroundColor = "#f1f1f1";
  document.getElementById("nextButton").style.color = "black";
  //Change colour of Previous Button to Purple
  document.getElementById("previousButton").style.backgroundColor = "#6b1d78";
  document.getElementById("previousButton").style.color = "white";
}

//Click Previous
function ShowPersonalDetailsForm() {
  //Showing Form 1 Personal Details - using 'display: none'
  document.getElementById("form1").style.display = "block";
  document.getElementById("form1title").style.display = "block";
  document.getElementById("GetInvolvedIntroText").style.display = "block";
  //Hiding Form 2 Business Details Form - using 'display: block'
  document.getElementById("form2title").style.display = "none";
  document.getElementById("form2").style.display = "none";
  document.getElementById("form2tandc").style.display = "none";
  document.getElementById("form2submit").style.display = "none";
  //Scroll to top
  document.documentElement.scrollTop = 0; 
  //Change colour of Previous button to Grey
  document.getElementById("previousButton").style.backgroundColor = "#f1f1f1";
  document.getElementById("previousButton").style.color = "black";
  //Change colour of Next Button to Purple
  document.getElementById("nextButton").style.backgroundColor = "#6b1d78";
  document.getElementById("nextButton").style.color = "white";
}


//
//
// Get Confirmation - using simple DOM window pop-up
function check() {
  confirm("Are you sure you want to continue?");
  location.href = "ThankYou.html"
}
