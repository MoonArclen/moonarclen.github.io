const canvas =
document.getElementById("game");

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width =
    innerWidth;

    canvas.height =
    innerHeight;
}

resize();

window.addEventListener(
"resize",
resize
);

function startGame(){

    document.getElementById(
    "startScreen"
    ).style.display =
    "none";
}

function openSettings(){

    document.getElementById(
    "settingsScreen"
    ).style.display =
    "flex";
}

function closeSettings(){

    document.getElementById(
    "settingsScreen"
    ).style.display =
    "none";
}

function openShop(){

    document.getElementById(
    "shopScreen"
    ).style.display =
    "flex";
}

function closeShop(){

    document.getElementById(
    "shopScreen"
    ).style.display =
    "none";
}

function openHowToPlay(){

    document.getElementById(
    "howToPlayScreen"
    ).style.display =
    "flex";
}

function closeHowToPlay(){

    document.getElementById(
    "howToPlayScreen"
    ).style.display =
    "none";
}

function openCredits(){

    document.getElementById(
    "creditsScreen"
    ).style.display =
    "flex";
}

function closeCredits(){

    document.getElementById(
    "creditsScreen"
    ).style.display =
    "none";
}

function openWebsite(){

    document.getElementById(
    "websiteScreen"
    ).style.display =
    "flex";
}

function closeWebsite(){

    document.getElementById(
    "websiteScreen"
    ).style.display =
    "none";
}

function openWiki(){

    document.getElementById(
    "wikiScreen"
    ).style.display =
    "flex";
}

function closeWiki(){

    document.getElementById(
    "wikiScreen"
    ).style.display =
    "none";
}

function openLeaderboard(){

    document.getElementById(
    "leaderboardScreen"
    ).style.display =
    "flex";
}

function closeLeaderboard(){

    document.getElementById(
    "leaderboardScreen"
    ).style.display =
    "none";
}

function openAccount(){

    alert(
    "OAuth Coming Soon"
    );
}

function toggleMusic(){

}

function toggleSounds(){

}
