import Controls from './controls.js';
import Sounds from './sounds.js';

export default function Timer(
    {
      minutesDisplay,
      secondsDisplay,
      controls
    })
  {
    let timerTimeOut;

    const hold = () => {
      clearTimeout(timerTimeOut);
    }
    
    const updateDisplay = (minutes, seconds) => {
      
      minutesDisplay.textContent = String(minutes).padStart(2,"0");
      secondsDisplay.textContent = String(seconds).padStart(2,"0");
    }
    
    const countDown = () => {
      timerTimeOut = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        let secondsFinished = seconds <= 0;
        let isFinished = seconds <= 0 && minutes <= 0;
        if(isFinished){
          Sounds().finishPlay();
          controls.play();
          return;
        }else{
          if(secondsFinished) {
            minutes--;
            updateDisplay(minutes,seconds);
            seconds = 60;
          }
          seconds--;
      
          updateDisplay(minutes,seconds);
        }
      
        countDown();
      },
      1000);
    }

    const updateMinutes = (newMinutes) => {
      if(newMinutes){
        updateDisplay(newMinutes,'0');
      }else{
        return;
      }
    } 

  
    const getMinutes = () => {
      return Number(minutesDisplay.textContent);
    }

    const getSeconds = () => {
      return Number(secondsDisplay.textContent);
    }


    return( { countDown , hold, updateDisplay, updateMinutes, getMinutes, getSeconds} );


}


