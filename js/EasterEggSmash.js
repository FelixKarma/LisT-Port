var audioSmashBall = new Audio();
    audioSmashBall.src="../Audio/SmashBallEffect.mp3";

var euroBeatsSmashBall = new Audio();
euroBeatsSmashBall.src="../Audio/Eurobeat Remix.mp3";


let ImgEasterEgg = document.getElementById('ImgEasterEgg');

function Actived(){
    ImgEasterEgg.style.display = "block";
    euroBeatsSmashBall.play();
}

let paf = 0;

function BallEffect(){
    paf++;

    if(paf==3){
        audioSmashBall.play();
        ImgEasterEgg.style.display = "none";
        euroBeatsSmashBall.pause();
    }
}

