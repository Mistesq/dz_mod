var timerHour = document.querySelector('.hour');
var timerMin = document.querySelector('.minute');
var timerSec = document.querySelector('.sec');
var timerMSec = document.querySelector('.msec');



function timerOn() {
if (butStart.innerHTML == "Start"){

       timerid = setInterval(function() {
          console.log('it works, timerSec=', typeof timerSec.innerHTML);
          timerMSec.innerHTML++;
          if (timerMSec.innerHTML == "999") {
            timerMSec.innerHTML = "000";
            timerSec.innerHTML++;
          }
          if (timerSec.innerHTML === "60"){
            timerSec.innerHTML = "0";
            timerMin.innerHTML++;
            if (timerMin.innerHTML === "60"){
              timerMin.innerHTML = "0";
              timerHour.innerHTML++;
          }
        }
        butStart.innerHTML = "Pause";
      }, 1);
    }

  if (butStart.innerHTML == "Pause"){
    clearInterval(timerid);
    butStart.innerHTML = "Start";
  }
}

function timerOff(event) {
  clearInterval(timerid);
  timerMSec.innerHTML = "000";
  timerSec.innerHTML = "00";
  timerMin.innerHTML = "00";
  timerHour.innerHTML = "00";
}

console.log(butStart );


butStart.addEventListener("click", timerOn );

butStop.addEventListener("click", timerOff);
