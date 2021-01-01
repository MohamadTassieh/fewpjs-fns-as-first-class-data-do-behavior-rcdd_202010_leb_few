/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(){
let date = new date();
if (date < 12){
  return "Godd Morning";
}
else if (date > 12 && date < 5){
  return "Good Afternoon";
}
else {
  return "Good Evening";
}
}



/* Write your implementation of displayMessage() */
 
