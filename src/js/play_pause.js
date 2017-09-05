/**
 * Created by sid on 15/5/17.
 */

function playpause() {
    console.log("play pause function");
    if (play == 0) {
        document.getElementById("playbutton").className = "fa fa-pause";
        if (song!= null) {
            song.play();
        }
        else {
            playAudio("song_0");
        }
        play = 1;
    }
    else {
        document.getElementById("playbutton").className = "fa fa-play";
        if (song!= null) {
            song.pause();
        }
        play = 0;
    }
}
