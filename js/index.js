import Timer from './timer.js';
import Controls from './controls.js';
import Sounds from './sounds.js';
import Events from './events.js';

import {
  body,
  buttonTree,
  buttonRain,
  buttonCity,
  buttonCamp,
  buttonLight,
  buttonDark,
  timeDisplay,
  minutesDisplay,
  secondsDisplay,
  cardCamp,
  cardCity,
  cardRain,
  cardTree,
  iconPlay,
  iconStop,
  iconInc,
  iconDec,
  iconRain,
  iconCity,
  iconTree,
  iconCamp,
  iconDark,
  iconLight,
  inputCamp,
  inputRain,
  inputCity,
  inputTree,

} from './elements.js';


const controls = Controls(
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
    cardCamp,
    cardCity,
    cardRain,
    cardTree,
    inputTree,
    inputCamp,
    inputCity,
    inputRain

  }
);

const timer = Timer(
{
  minutesDisplay,
  secondsDisplay,
  controls
});

const sound = Sounds();

Events({ controls, timer, sound });



