import { 
  buttonPlay, 
  buttonStop,
  buttonAdd,
  buttonSub,
  buttonTree,
  buttonCamp,
  buttonCity,
  buttonRain,
  iconPlay,
} from "./elements.js";

export default function Events (
  {
  controls,
  timer,
  sound
  }) {

  let minutes = 25;
  let seconds = 0;

  const play = () => {
    sound.pressButton();
    
    controls.play();
    if(iconPlay.classList.contains('active-button')){
      timer.countDown();
    }else{
      timer.hold();
    }

  }

  const stop = () => {
    timer.hold();
    controls.play();
    timer.updateMinutes(minutes);
    sound.pressButton();
  }

  const add = () => {
    minutes = timer.getMinutes();
    seconds = timer.getSeconds();
    if(minutes<=55){
      minutes+=5;
      timer.updateDisplay(minutes,seconds);
    }
    sound.pressButton();

   
  }

  const sub = () => {
    minutes = timer.getMinutes();
    seconds = timer.getSeconds();
    if(minutes>5){
      minutes-=5;
      timer.updateDisplay(minutes,seconds);
    }
    sound.pressButton();
  }

  const tree = () => {
    
    controls.tree();
    if(buttonTree.classList.contains('active')){
      sound.initTree();
    }else{
      sound.stopTree();
    }
  }


  const city = () => {
  
    controls.city();
    if(buttonCity.classList.contains('active')){
      sound.initCity();
    }else{
      sound.stopCity();
    }
  }

  const camp = () => {

    controls.camp();
    if(buttonCamp.classList.contains('active')){
      sound.initCamp();
    }else{
      sound.stopCamp();
    }
  }

  const rain = () => {
    
    controls.rain();
    if(buttonRain.classList.contains('active')){
      sound.initRain();
    }else{
      sound.stopRain();
    }
  }


 

  buttonPlay.addEventListener('click', play );
      
  buttonStop.addEventListener('click', stop );

  buttonAdd.addEventListener('click', add );

  buttonSub.addEventListener('click', sub );
        
  buttonTree.addEventListener('click', tree);

  buttonCity.addEventListener('click', city);

  buttonCamp.addEventListener('click', camp);

  buttonRain.addEventListener('click', rain);

  return({
  });
}

