const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width; canvas.height = height;

let player = {x: width/4, y: height/2, w:50, h:50, vy:0, gravity:0.6};
let spikes = [];
let score = 0, coins = 0, highScore = 0, paused = false;

function flipGravity(){ if(!paused) player.vy=-10; }

window.addEventListener("keydown", e=>{if(e.code==="Space") flipGravity();});
canvas.addEventListener("click", flipGravity);

window.addEventListener("resize", ()=>{width=window.innerWidth;height=window.innerHeight;canvas.width=width;canvas.height=height;});

function startGame(){closeAllScreens();document.getElementById("startScreen").classList.add("hidden");score=0;player.y=height/2;player.vy=0;spikes=[];paused=false;requestAnimationFrame(update);}

function update(){
  if(paused){requestAnimationFrame(update);return;}
  ctx.clearRect(0,0,width,height);
  player.vy += player.gravity;
  player.y += player.vy;
  if(player.y+player.h>height){player.y=height-player.h;player.vy=0;}
  if(player.y<0){player.y=0;player.vy=0;}
  ctx.fillStyle="#6177dc"; ctx.fillRect(player.x,player.y,player.w,player.h);

  if(Math.random()<0.01) spikes.push({x:width,y:Math.random()*height,w:20,h:50});
  ctx.fillStyle="#e74c3c"; spikes.forEach((s,i)=>{s.x-=6;ctx.fillRect(s.x,s.y,s.w,s.h);if(s.x+s.w<0) spikes.splice(i,1);});
  spikes.forEach(s=>{if(player.x<s.x+s.w&&player.x+player.w>s.x&&player.y<s.y+s.h&&player.y+player.h>s.y) gameOver();});

  score+=0.1;
  document.getElementById("distance").innerText="Distance: "+Math.floor(score);
  document.getElementById("coins").innerText="Coins: "+coins;
  document.getElementById("menuCoins").innerText=coins;
  document.getElementById("menuHigh").innerText=highScore;

  requestAnimationFrame(update);
}

function gameOver(){paused=true;if(Math.floor(score)>highScore) highScore=Math.floor(score);coins+=Math.floor(score);alert(`Game Over!\nDistance: ${Math.floor(score)}\nCoins earned: ${Math.floor(score)}`);paused=false;startGame();}
