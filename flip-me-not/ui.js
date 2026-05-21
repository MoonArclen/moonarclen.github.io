const screens=["settingsScreen","shopScreen","howToPlayScreen","creditsScreen","websiteScreen","wikiScreen","leaderboardScreen"];
function closeAllScreens(){screens.forEach(id=>document.getElementById(id).classList.add("hidden"));}
function openScreen(screenId){closeAllScreens();document.getElementById(screenId).classList.remove("hidden");}
function openAccount(){alert("OAuth Coming Soon");}
