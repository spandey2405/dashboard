/**
 * Created by sid on 15/5/17.
 */

function get_tracker_pos() {
    return audioTrack.value;
}


function get_volume_pos() {
    return volume_control.value;
}


function set_tracker_pos(curtime) {
    audioTrack.MaterialSlider.change(parseInt(curtime));
    return true;
}


function set_volume_pos(volume_val) {
    volume_control.MaterialSlider.change(parseInt((volume_val)/100));
    return true;
}

function update_vol() {
    var volume_val = get_volume_pos();
    console.log(volume_val);
    if (song != null) {
        song.volume = volume_val / 100;
    }
}

function update_track(value) {
    console.log(value);
    if (song != null) {
        song.currentTime = parseInt(value);
        set_tracker_pos(parseInt(value));
    }
}