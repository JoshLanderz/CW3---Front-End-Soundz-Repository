//Fresh On The Net - Play Button (Do not edit this button)
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







// Select all curated genres album wrappers
const curatedGenreAlbums = document.querySelectorAll(".curated-genres-album-wrapper");

curatedGenreAlbums.forEach(album => {
    const playButton = album.querySelector(".curated-genre-song-play-button");
    const audioElement = album.querySelector("audio");
    const playIconElement = playButton.querySelector("i");
    const progressBar = album.querySelector(".cgs-progress");
    const remainingTime = album.querySelector(".remainingTime");

    playButton.addEventListener("click", () => {
      // Pause all songs
      curatedGenreAlbums.forEach(album => {
          const otherAudioElement = album.querySelector("audio");
          const otherPlayButton = album.querySelector(".curated-genre-song-play-button");
          const otherPlayIconElement = otherPlayButton.querySelector("i");
          if (otherAudioElement !== audioElement) {
              otherAudioElement.pause();
              otherPlayIconElement.classList.remove("fa-pause");
              otherPlayIconElement.classList.add("fa-play");
              otherPlayButton.classList.remove("active");
          }
      });

      // Toggle play/pause for the clicked song
      if (audioElement.paused) {
          audioElement.play();
          playIconElement.classList.remove("fa-play");
          playIconElement.classList.add("fa-pause");
          playButton.classList.add("active");
      } else {
          audioElement.pause();
          playIconElement.classList.remove("fa-pause");
          playIconElement.classList.add("fa-play");
          playButton.classList.remove("active");
      }
  });

  audioElement.addEventListener("timeupdate", () => {
      const progress = (audioElement.currentTime / audioElement.duration) * 100;
      progressBar.value = progress;
      
      // Calculate remaining time
      const remaining = audioElement.duration - audioElement.currentTime;
      const minutes = Math.floor(remaining / 60);
      const seconds = Math.floor(remaining % 60);
      const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      remainingTime.textContent = formattedTime;
  });

  progressBar.addEventListener("input", () => {
      // Calculate the new time based on the progress bar value
      const newTime = (progressBar.value / 100) * audioElement.duration;
      // Update the audio element's current time
      audioElement.currentTime = newTime;
  });

  audioElement.onended = () => {
      playIconElement.classList.remove("fa-pause");
      playIconElement.classList.add("fa-play");
      playButton.classList.remove("active");
      progressBar.value = 0;
      remainingTime.textContent = "0:00";
  };
});


























  
function searchOpen() {
  const defaultSearchEl = document.getElementById("searchEl");

  defaultSearchEl.classList.remove("openSearchEl");
  defaultSearchEl.classList.add("newSearchEl");

  const searchIcon = document.getElementById("search-bar-new-icon");

  searchIcon.style.right = "12px";
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


const recMottos = document.getElementById(".motto-text");

  if (document.body.scrollTop > 1330 || document.documentElement.scrollTop > 1330) {
    recMottos.style.display = "flex";
  } else {
    recMottos.style.display = "none";
  }
}
