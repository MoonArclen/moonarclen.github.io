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

let gameRunning = false;

function startGame(){

    document.getElementById(
    "startScreen"
    ).style.display =
    "none";

    gameRunning = true;
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

function openWebsite(){

    window.open(
    "https://ma.work.gd"
    );
}

function openWiki(){

    window.open(
    "https://ma.work.gd/wiki"
    );
}

function openCredits(){

    alert(
    "Flip Me Not\nBy Moon Arclen"
    );
}

function openHowToPlay(){

    alert(
    "Tap or press SPACE to flip gravity and avoid spikes."
    );
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

function openShop(){

}

function openLeaderboard(){

}
