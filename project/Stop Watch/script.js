 // javascript code goes here

<<<<<<< HEAD

//  const timerElement = document.querySelector("#timer");
 const timerElement = document.getElementById("timer")
 const startButton = document.querySelector("#start");
 const stopButton = document.querySelector("#stop");
 const pauseButton = document.querySelector("#pause");
 
=======
>>>>>>> c6cd89af4cdb1f2f17b004dadaa687b45d91d83c
 let hours = 0;
 let minutes = 0;
 let seconds = 0;
 let timerInterval;

<<<<<<< HEAD
=======
 const timerElement = document.querySelector("#timer");
 const startButton = document.querySelector("#start");
 const stopButton = document.querySelector("#stop");
 const pauseButton = document.querySelector("#pause");

>>>>>>> c6cd89af4cdb1f2f17b004dadaa687b45d91d83c
 stopButton.disabled = true;
 pauseButton.disabled = true;

 timerElement.innerHTML = "00:00:00";

 function formatTime(time) {
   return time < 10 ? "0" + time : time;
 }

 function updateTimer() {
   seconds++;
   if (seconds === 60) {
     seconds = 0;
     minutes++;
     if (minutes === 60) {
       minutes = 0;
       hours++;
     }
   }

   timerElement.textContent =
<<<<<<< HEAD
     formatTime(hours) +":" +formatTime(minutes) +
     ":" + formatTime(seconds);
=======
     formatTime(hours) +
     ":" +
     formatTime(minutes) +
     ":" +
     formatTime(seconds);
>>>>>>> c6cd89af4cdb1f2f17b004dadaa687b45d91d83c
 }

 startButton.addEventListener("click", () => {
   startButton.disabled = true;
   stopButton.disabled = false;
   pauseButton.disabled = false;

   timerInterval = setInterval(updateTimer, 1000);
 });

 stopButton.addEventListener("click", () => {
   startButton.disabled = false;
   stopButton.disabled = true;
   pauseButton.disabled = true;

   clearInterval(timerInterval);
   hours = 0;
   minutes = 0;
   seconds = 0;
   timerElement.textContent = "00:00:00";
 });

 pauseButton.addEventListener("click", () => {
   if (pauseButton.textContent === "Pause") {
     clearInterval(timerInterval);
     pauseButton.textContent = "Continue";
   } else {
     timerInterval = setInterval(updateTimer, 1000);
     pauseButton.textContent = "Pause";
   }
 });