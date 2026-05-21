const canvas =
document.getElementById(
"game"
);

const ctx =
canvas.getContext(
"2d"
);

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

const screens = [

    "settingsScreen",
    "shopScreen",
    "howToPlayScreen",
    "creditsScreen",
    "websiteScreen",
    "wikiScreen",
    "leaderboardScreen"

];

function closeAllScreens(){

    screens.forEach(id=>{

        document.getElementById(id)
        .classList.add(
        "hidden"
        );

    });
}

function startGame(){

    closeAllScreens();

    document.getElementById(
    "startScreen"
    ).classList.add(
    "hidden"
    );
}

function openSettings(){

    closeAllScreens();

    document.getElementById(
    "settingsScreen"
    ).classList.remove(
    "hidden"
    );
}

function openShop(){

    closeAllScreens();

    document.getElementById(
    "shopScreen"
    ).classList.remove(
    "hidden"
    );
}

function openHowToPlay(){

    closeAllScreens();

    document.getElementById(
    "howToPlayScreen"
    ).classList.remove(
    "hidden"
    );
}

function openCredits(){

    closeAllScreens();

    document.getElementById(
    "creditsScreen"
    ).classList.remove(
    "hidden"
    );
}

function openWebsite(){

    closeAllScreens();

    document.getElementById(
    "websiteScreen"
    ).classList.remove(
    "hidden"
    );
}

function openWiki(){

    closeAllScreens();

    document.getElementById(
    "wikiScreen"
    ).classList.remove(
    "hidden"
    );
}

function openLeaderboard(){

    closeAllScreens();

    document.getElementById(
    "leaderboardScreen"
    ).classList.remove(
    "hidden"
    );
}

function openAccount(){

    alert(
    "OAuth Coming Soon"
    );
}

function toggleMusic(){

    const button =
    document.getElementById(
    "musicToggle"
    );

    button.innerText =
    button.innerText.includes(
    "ON"
    )
    ?
    "Music: OFF"
    :
    "Music: ON";
}

function toggleSounds(){

    const button =
    document.getElementById(
    "soundToggle"
    );

    button.innerText =
    button.innerText.includes(
    "ON"
    )
    ?
    "Sound: OFF"
    :
    "Sound: ON";
}
