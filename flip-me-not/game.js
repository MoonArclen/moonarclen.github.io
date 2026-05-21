const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

const screens = [
  "settingsScreen","shopScreen","howToPlayScreen",
  "creditsScreen","websiteScreen","wikiScreen","leaderboardScreen"
];

function closeAllScreens() {
  screens.forEach(id => document.getElementById(id).classList.add("hidden"));
}

function openScreen(screenId) {
  closeAllScreens();
  document.getElementById(screenId).classList.remove("hidden");
}

function startGame() { document.getElementById("startScreen").classList.add("hidden"); }

function openAccount() { alert("OAuth Coming Soon"); }
function toggleMusic() {
  const btn = document.getElementById("musicToggle");
  btn.innerText = btn.innerText.includes("ON") ? "Music: OFF" : "Music: ON";
}
function toggleSounds() {
  const btn = document.getElementById("soundToggle");
  btn.innerText = btn.innerText.includes("ON") ? "Sound: OFF" : "Sound: ON";
}
