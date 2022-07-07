import { 
  buttonPlay, 
  buttonStop,
  buttonAdd,
  buttonSub,
  cardTree,
  cardCamp,
  cardCity,
  cardRain,
  buttonTree,
  buttonCamp,
  buttonCity,
  buttonRain,
  buttonDark,
  buttonLight,
  iconPlay,
  inputTree,
  inputCamp,
  inputCity,
  inputRain,

  
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
    if(iconPlay.classList.contains('active')){
      timer.countDown();
    }else{
      timer.hold();
    }

  }

  const stop = () => {
    timer.hold();
    controls.reset();
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

    sound.setVolumeRain(0.5);


   
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
    if(cardTree.classList.contains('active')){
      sound.initTree();
    }else{
      sound.stopTree();
    }
  }


  const city = () => {
  
    controls.city();
    if(cardCity.classList.contains('active')){
      sound.initCity();
    }else{
      sound.stopCity();
    }
  }

  const camp = () => {

    controls.camp();
    if(cardCamp.classList.contains('active')){
      sound.initCamp();
    }else{
      sound.stopCamp();
    }
  }

  const rain = () => {
    
    controls.rain();
    if(cardRain.classList.contains('active')){
      sound.initRain();
    }else{
      sound.stopRain();
    }
  }

  const mode = () => {
    controls.mode();
    
  }

  const volumeTree = () => {
    sound.setVolumeTree(inputTree.value);
  }

  const volumeCamp = () => {
    sound.setVolumeCamp(inputCamp.value);
  }
  const volumeCity = () => {
    sound.setVolumeCity(inputCity.value);
  }
  const volumeRain = () => {
    sound.setVolumeRain(inputRain.value);
  }
 

  buttonPlay.addEventListener('click', play );
      
  buttonStop.addEventListener('click', stop );

  buttonAdd.addEventListener('click', add );

  buttonSub.addEventListener('click', sub );
        
  buttonTree.addEventListener('click', tree);

  buttonCity.addEventListener('click', city);

  buttonCamp.addEventListener('click', camp);

  buttonRain.addEventListener('click', rain);

  inputTree.addEventListener('input', volumeTree);

  inputCamp.addEventListener('input', volumeCamp);

  inputCity.addEventListener('input', volumeCity);

  inputRain.addEventListener('input', volumeRain);

  buttonLight.addEventListener('click', mode);

  buttonDark.addEventListener('click', mode);


}

