/**
 * Created by sid on 15/5/17.
 */
function playAudio(id) {

    var song_id = parseInt(id.split("_")[1]);
    current_song_id = song_id;
    var filename = playlist[song_id]['file'];
    var Title = playlist[song_id]['Title'];
    var dur = parseInt(playlist[parseInt(id.split("_")[1])]['dur']);

    currently_playing = id;

    var message_playing = "Playing " + Title;
    jAwesome.html.set("song_info", message_playing);
    if (song != null) {
        song.pause();
    }

    audioTrack.max = dur;
    song = new Audio("songs/" + filename);

    song.addEventListener('timeupdate',function (){
        var curtime = parseInt(song.currentTime);
        set_tracker_pos(curtime);
        current_timeline = get_tracker_pos();
        if (curtime == dur) {
            play_next();
        }
    });

    var val_volume = get_volume_pos();
    song.volume = val_volume / 100;
    song.play();
    reset_vote(filename);
    play = 1;
    document.getElementById('playbutton').className = "fa fa-pause";
}

function reset_vote(file) {
    var dataS = {"reset_votes": file};
    jAwesome.request.post("php_files/playlist.php", dataS, false, function (response) {
        console.log(response);
    });
}

function play_next() {
    var next = "song_0";
    playAudio(next);
}

function play_previous() {
    if(current_song_id == 1) {
        var prev = "song_" + max_song_id;
    }
    else {
        var prev = "song_" + (current_song_id-1);
    }
    console.log(prev);
    playAudio(prev);
}
