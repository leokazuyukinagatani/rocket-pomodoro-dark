import Timer from './timer.js';
import Controls from './controls.js';
import Sounds from './sounds.js';
import Events from './events.js';

import {
  buttonTree,
  buttonRain,
  buttonCity,
  buttonCamp,
  minutesDisplay,
  secondsDisplay,
  iconPlay,
  iconRain,
  iconCity,
  iconTree,
  iconCamp,
} from './elements.js';


const controls = Controls(
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
);

const timer = Timer(
{
  minutesDisplay,
  secondsDisplay,
  controls
});

const sound = Sounds();

Events({ controls, timer, sound });



