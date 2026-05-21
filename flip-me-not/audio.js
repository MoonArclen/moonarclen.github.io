let music = new Audio("https://ma.work.gd/sounds/Crimson-Moon");
let dieSound = new Audio("https://ma.work.gd/sounds/die");
let musicOn=true, soundOn=true;

function toggleMusic(){musicOn=!musicOn;if(musicOn){music.loop=true;music.play();}else{music.pause();}}
function toggleSounds(){soundOn=!soundOn;}
function playDie(){if(soundOn)dieSound.play();}
