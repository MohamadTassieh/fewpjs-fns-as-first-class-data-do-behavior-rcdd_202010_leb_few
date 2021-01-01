/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let newTime = time.split(":")[0];
if (newTime < 12){
  return "Good Morning";
}
// else if (newTime >= 12 && time <= 17){
//   return "Good Afternoon";
}
else if (newTime > 17 && time <= 24) {
  return "Good Evening";
}
else {
  return "Good Afternoon";
}
}



/* Write your implementation of displayMessage() */
