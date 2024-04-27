//Fresh On The Net - Play Button
let song = document.getElementById("song");
let playIcon = document.getElementById("playIcon");

function playPause(){
    if(playIcon.classList.contains("fa-pause")){
        song.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    } else {
        song.play();
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
    }
}


function searchOpen() {
    const defaultSearchEl = document.getElementById("searchEl");

    defaultSearchEl.classList.remove("openSearchEl");
    defaultSearchEl.classList.add("newSearchEl");

    const searchIcon = document.getElementById("search-bar-new-icon");

    searchIcon.style.right = "12px";
}


