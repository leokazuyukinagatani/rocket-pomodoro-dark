
export default function Controls(
  {
    body,
    iconPlay,
    iconStop,
    iconInc,
    iconDec,
    iconCamp,
    iconCity,
    iconRain,
    iconTree,
    iconDark,
    iconLight,
    buttonCamp,
    buttonCity,
    buttonRain,
    buttonTree,
    buttonDark,
    buttonLight,
    timeDisplay,
    cardTree,
    cardCamp,
    cardCity,
    cardRain,
    inputTree,
    inputCamp,
    inputCity,
    inputRain,

  }
)
{

  const play = () => {
    iconPlay.classList.toggle('active-button');
  }

  const reset = () => {
    iconPlay.classList.remove('active-button');
  }

  const camp = () => {

    buttonCamp.classList.toggle('active');
    iconCamp.classList.toggle('active-icon');
  }

  const city = () => {
    buttonCity.classList.toggle('active');
    iconCity.classList.toggle('active-icon');
  }

  const rain = () => {
    buttonRain.classList.toggle('active');
    cardRain.classList.toggle('active');
    iconRain.classList.toggle('active-icon');
  }

  const tree = () => {
    buttonTree.classList.toggle('active');
    iconTree.classList.toggle('active-icon');

  }
  
  const iconMode = () => {
    iconTree.classList.toggle('active-icon');
    iconRain.classList.toggle('active-icon');
    iconCamp.classList.toggle('active-icon');
    iconCity.classList.toggle('active-icon');
    iconLight.classList.toggle('active-icon');
    iconDark.classList.toggle('active-icon');
    iconPlay.classList.toggle('active-icon');
    iconStop.classList.toggle('active-icon');
    iconInc.classList.toggle('active-icon');
    iconDec.classList.toggle('active-icon');
  }

  const mode = () => {
    buttonLight.classList.toggle('no-display-icon');
    buttonDark.classList.toggle('no-display-icon');
    body.classList.toggle('dark-mode');
    iconMode();
    timeDisplay.classList.toggle('dark-fc');
    
  }
  

  return( { play, camp, city, rain, tree, reset , mode} );
}

