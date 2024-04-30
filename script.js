//Fresh On The Net - Play Button
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playIcon = document.getElementById("playIcon");

let rTime = document.getElementById("rTime");

song.onloadedmetadata = function(){
    song.pause();
    progress.max = song.duration;
    progress.value = song.currentTime;
}

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

if(song.play()){
  setInterval(()=>{
      progress.value = song.currentTime;
  },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playIcon.classList.add("fa-pause");
    playIcon.classList.remove("fa-play");
}


//Curated Genres - Play Buttons
let cgsProgress = document.getElementById("cgs-progress");
let curatedGenreSong = document.getElementById("curated-genre-song");
let cgsPlayIcon = document.getElementById("cgs-playIcon")
let remainingTime = document.getElementById("remainingTime");

curatedGenreSong.onloadedmetadata = function(){
  curatedGenreSong.pause();
  cgsProgress.max = curatedGenreSong.duration;
  cgsProgress.value = curatedGenreSong.currentTime;
}


function curatedGenresPlayPause(){
  if(cgsPlayIcon.classList.contains("fa-pause")){
      curatedGenreSong.pause();
      cgsPlayIcon.classList.remove("fa-pause");
      cgsPlayIcon.classList.add("fa-play");
  } else {
      curatedGenreSong.play();
      cgsPlayIcon.classList.add("fa-pause");
      cgsPlayIcon.classList.remove("fa-play");
  }
}


if (curatedGenreSong.play()) {
    let updateRemainingTime = setInterval(() => {
    let currentTime = curatedGenreSong.currentTime;
    let remaining = cgsProgress.max - currentTime;
    let minutes = Math.floor(remaining / 60);
    let seconds = Math.floor(remaining % 60);
    minutes = minutes < 10 ? + "0" + minutes : minutes;
    seconds = seconds < 10 ? + "0" + seconds : seconds;
    remainingTime.textContent = `${minutes}:${seconds}`; // Update remaining time display
  }, 500);

    // Stop updating remaining time when the song ends
    curatedGenreSong.onended = function() {
      clearInterval(updateRemainingTime);
      remainingTime.textContent = ""; // Clear remaining time after song ends
    }
  }
  
  cgsProgress.onchange = function() {
    curatedGenreSong.play();
    curatedGenreSong.currentTime = cgsProgress.value;
    cgsPlayIcon.classList.add("fa-pause");
    cgsPlayIcon.classList.remove("fa-play");
  }




/*Navbar
/*Navbar On Scroll*/
window.onscroll = function() {navbarScroll()};

function navbarScroll() {
  const space = document.getElementById("space");
  const navLinks = document.getElementById("nav-links");
  const logoSpan = document.getElementById("logo-span");

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    space.classList.remove("space");
    space.classList.add("space-scroll");

    logoSpan.classList.remove("logo-span");
    logoSpan.classList.add("logoSpan-scroll");
  } else {
    space.classList.add("space");
    space.classList.remove("space-scroll");

    logoSpan.classList.add("logo-span");
    logoSpan.classList.remove("logoSpan-scroll");
  }


const recMottos = document.getElementById("motto-text");

  if (document.body.scrollTop > 1330 || document.documentElement.scrollTop > 1330) {
    recMottos.style.display = "flex";
  } else {
    recMottos.style.display = "none";
  }
}

function searchOpen() {
  const defaultSearchEl = document.getElementById("searchEl");

  defaultSearchEl.classList.remove("openSearchEl");
  defaultSearchEl.classList.add("newSearchEl");

  const searchIcon = document.getElementById("search-bar-new-icon");

  searchIcon.style.right = "12px";
}
