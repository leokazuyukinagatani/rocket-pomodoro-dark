export default function() {
  const treeAudio = new Audio("https://github.com/leokazuyukinagatani/rocket-pomodoro/blob/main/audios/Floresta.wav?raw=true");
  const rainAudio = new Audio("https://github.com/leokazuyukinagatani/rocket-pomodoro/blob/main/audios/Chuva.wav?raw=true");
  const cityAudio = new Audio("https://github.com/leokazuyukinagatani/rocket-pomodoro/blob/main/audios/Cafeteria.wav?raw=true");
  const campAudio = new Audio("https://github.com/leokazuyukinagatani/rocket-pomodoro/blob/main/audios/Lareira.wav?raw=true");
  const finishAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");


  treeAudio.loop = true;
  rainAudio.loop = true;
  cityAudio.loop = true;
  campAudio.loop = true;
  
  function initTree() {
    treeAudio.play();
  }

  function stopTree() {
    treeAudio.pause();
  }

  function initRain() {
    rainAudio.play();
  }

  function stopRain() {
    rainAudio.pause();
  }
  function initCity() {
    cityAudio.play();
  }

  function stopCity() {
    cityAudio.pause();
  }

  function initCamp() {
    campAudio.play();
  }

  function stopCamp() {
    campAudio.pause();
  }

  function finishPlay() {
    finishAudio.play();
  }
  function pressButton() {
    buttonPressAudio.play();
  }
  function setVolumeTree(volume) {
    treeAudio.volume = volume;
  }
  function setVolumeCamp(volume) {
    campAudio.volume = volume;
  }
  function setVolumeCity(volume) {
    cityAudio.volume = volume;
  }
  function setVolumeRain(volume) {
    rainAudio.volume = volume;
  }
  return {
    initTree,
    stopTree,
    initRain,
    stopRain,
    initCity,
    stopCity,
    initCamp,
    stopCamp,
    finishPlay,
    pressButton,
    setVolumeCamp,
    setVolumeTree,
    setVolumeCity,
    setVolumeRain
  }
};

 