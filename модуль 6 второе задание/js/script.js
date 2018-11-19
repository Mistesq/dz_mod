var timerHour = document.querySelector('.hour');
var timerMin = document.querySelector('.minute');
var timerSec = document.querySelector('.sec');
var timerMSec = document.querySelector('.msec');
var conList = document.querySelector('.conList');
var counterStop = 0;

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
        butStart.innerHTML = "Stop";
      }, 1);
    }

  if (butStart.innerHTML == "Stop"){
    clearInterval(timerid);
    counterStop++;
    butStart.innerHTML = "Start";
   ch = document.createElement('p');
    ch.classList.add('listT');
    ch.innerHTML = counterStop + " Stop " + timerHour.innerHTML + " часов " + timerMin.innerHTML + " минут "+ timerSec.innerHTML + " сек " + timerMSec.innerHTML + " мсек ";
    conList.appendChild(ch);
  }
}

function timerSplit() {
    if (butStart.innerHTML == "Stop") {
    counterStop++;
    chv = document.createElement('p');
    chv.classList.add('listT');
    chv.innerHTML = counterStop + " Split " + timerHour.innerHTML + " часов " + timerMin.innerHTML + " минут "+ timerSec.innerHTML + " сек " + timerMSec.innerHTML + " мсек ";
    conList.appendChild(chv);
  }
}
function timerOff() {
  clearInterval(timerid);
  while ( conList.firstChild) {
    conList.removeChild(conList.firstChild);
  }
  timerMSec.innerHTML = "000";
  timerSec.innerHTML = "00";
  timerMin.innerHTML = "00";
  timerHour.innerHTML = "00";
  counterStop = 0;
  butStart.innerHTML = "Start";
}

console.log(butStart );


butStart.addEventListener("click", timerOn );
butSplit.addEventListener("click", timerSplit);
butReset.addEventListener("click", timerOff);
