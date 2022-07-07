
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
    iconPlay.classList.toggle('active');
  }

  const reset = () => {
    iconPlay.classList.remove('active');
  }

  const camp = () => {
    cardCamp.classList.toggle('active');
    iconCamp.classList.toggle('icon-color');
    inputCamp.classList.toggle('no-display');

  }

  const city = () => {
    cardCity.classList.toggle('active');
    iconCity.classList.toggle('icon-color');
    inputCity.classList.toggle('no-display');

  }

  const rain = () => {
    cardRain.classList.toggle('active');
    iconRain.classList.toggle('icon-color');
    inputRain.classList.toggle('no-display');

  }

  const tree = () => {
    cardTree.classList.toggle('active');
    iconTree.classList.toggle('icon-color');
    inputTree.classList.toggle('no-display');

  }
  
  const iconMode = () => {
    iconTree.classList.toggle('icon-color');
    iconRain.classList.toggle('icon-color');
    iconCamp.classList.toggle('icon-color');
    iconCity.classList.toggle('icon-color');
    iconLight.classList.toggle('icon-color');
    iconDark.classList.toggle('icon-color');
    iconPlay.classList.toggle('icon-color');
    iconStop.classList.toggle('icon-color');
    iconInc.classList.toggle('icon-color');
    iconDec.classList.toggle('icon-color');
  }

  const mode = () => {
    buttonLight.classList.toggle('no-display');
    buttonDark.classList.toggle('no-display');
    body.classList.toggle('dark');
    
  }
  

  return( { play, camp, city, rain, tree, reset , mode} );
}

