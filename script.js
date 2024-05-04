
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
}

const recMottos = document.getElementById(".motto-text");

  if (document.body.scrollTop > 1330 || document.documentElement.scrollTop > 1330) {
    recMottos.style.display = "flex";
  } else {
    recMottos.style.display = "none";
  }


function searchOpen() {
  const defaultSearchEl = document.getElementById("searchEl");

  defaultSearchEl.classList.remove("openSearchEl");
  defaultSearchEl.classList.add("newSearchEl");

  const searchIcon = document.getElementById("search-bar-new-icon");

  searchIcon.style.right = "12px";
}


//Modal Login Form//

// Get the modal

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




/**/

