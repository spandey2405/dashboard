/**
 * Created by sid on 22/5/17.
 */
function update_playlist() {
    jAwesome.request.get("php_files/playlist.php?playlist=true", false, function (response) {
        response = JSON.parse(response);
        var key = 0;
        jAwesome.html.set("plalistBlock", "");
        response.forEach(function(song_details) {

            jAwesome.html.append("plalistBlock", create_song_list(song_details['Title'], song_details['duration'], key, song_details['votes']));
            playlist[key] = {
                "file": song_details['FileName'],
                "dur": song_details['seconds'],
                "Title": song_details['Title']

            };
            max_song_id = key;
            key = key + 1;
        });
    })
}

function create_song_list(song_name, duration, id, votes) {
    var string_song = '<li class="mdl-list__item mdl-list__item--two-line" onclick="playAudio(this.id)" id="song_' + id + '">';
    string_song = string_song + '<span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-avatar">person</i>';
    string_song = string_song + '<span id="song_name_' + id + '">' + song_name + '</span><span class="mdl-list__item-sub-title">'+votes+' votes - ' + duration + '</span>';
    string_song = string_song + '</li>';
    return string_song
}

update_playlist();
window.setInterval(function(){
    update_playlist();
    // console.log("updated_playlist");
}, 5000);


