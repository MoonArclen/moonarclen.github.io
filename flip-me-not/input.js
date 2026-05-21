// Flip gravity on click/tap
canvas.addEventListener("click",()=>{if(!paused)player.vy=-10;});
document.addEventListener("keydown",e=>{if(e.code==="Space")flipGravity();});
