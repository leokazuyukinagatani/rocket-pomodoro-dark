export default function Controls(
  {
    iconPlay,
    iconCamp,
    iconCity,
    iconRain,
    iconTree,
    buttonCamp,
    buttonCity,
    buttonRain,
    buttonTree
    
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
    iconRain.classList.toggle('active-icon');
  }

  const tree = () => {
    buttonTree.classList.toggle('active');
    iconTree.classList.toggle('active-icon');

  }
  

  return( { play, camp, city, rain, tree, reset } );
}

