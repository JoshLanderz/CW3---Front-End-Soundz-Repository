
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

  function toggleSelection(buttonId) {
    let fesListBlock1 = document.getElementById("ul1");
    let fesListBlock2 = document.getElementById("ul2");
    let fesListBlock1Li = document.getElementById("ul2 li")

    // Clear any previous disabled states
    document.getElementById("fes-sel-btn-1").disabled = false;
    document.getElementById("fes-sel-btn-2").disabled = false;

    // Toggle based on clicked button
    if (buttonId === "fes-sel-btn-1") {
        fesListBlock1.style.display = "block";
        fesListBlock2.style.display = "none";
        document.getElementById("fes-sel-btn-2").disabled = false;
        document.getElementById("fes-sel-btn-1").disabled = true;
    } else if (buttonId === "fes-sel-btn-2") {
        fesListBlock1.style.display = "none";
        fesListBlock2.style.display = "block";
        document.getElementById("fes-sel-btn-1").disabled = false;
        document.getElementById("fes-sel-btn-2").disabled = true;
    } else {
        // Handle unexpected button ID
        console.error("Invalid button ID:", buttonId);
    }
}




  /*Full Roster Search Bar*/
  function rosterSearchField() {
    var rosterSearchInput,
    rosterSearchFilter,
    rosterSearchUl,
    rosterSearchList,
    a,
    i,
    rosterSearchValue; /*7 Variables created*/

    rosterSearchInput = document.getElementById("rosterSearchField");
    rosterSearchFilter = rosterSearchInput.value.toUpperCase();
    rosterSearchUl = document.getElementById("roster-search-results-ul");
    rosterSearchList = rosterSearchUl.getElementsByTagName("li");

    for (i = 0; i < rosterSearchList.length; i++) {
          searchResults = rosterSearchList[i].getElementsByTagName("a")[0];
          rosterSearchValue = searchResults.textContent || searchResults.innerText;
    if (rosterSearchValue.toUpperCase().indexOf(rosterSearchFilter) > -1) {
          rosterSearchList[i].style.display = "block";          
    } else {
    rosterSearchList[i].style.display = "none"; 
  }
}
}

/*Clear Search*/

function clearSearch() {
  var searchField = document.getElementById("rosterSearchField");
  searchField.value = '';
}

/*Filter Dropdown List*/

function togglefilterDropdown() {
   var filterDrop = document.getElementById("filter-dropdown");

   if(filterDrop.style.display === "none") {
    filterDrop.style.display = "grid";
   } else {
    filterDrop.style.display = "none";
   }
}

/*Pagination Links*/

function pageLinkOne() {

document.getElementById("pagination-backward").style.opacity = 0.1;
document.getElementById("pagination-forward").style.opacity = 1;
document.getElementById("pagination-link1").style.color = "var(--secondary-clr)";
document.getElementById("pagination-link2").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link3").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link4").style.color = "var(--paragraph-text-clr)";

document.getElementById("roster-search-results-ul1").style.display = "flex";
document.getElementById("roster-search-results-ul2").style.display = "none";
document.getElementById("roster-search-results-ul3").style.display = "none";
document.getElementById("roster-search-results-ul4").style.display = "none";
}

function pageLinkTwo() {
document.getElementById("pagination-backward").style.opacity = 1;
document.getElementById("pagination-forward").style.opacity = 1;
document.getElementById("pagination-link2").style.color = "var(--secondary-clr)";
document.getElementById("pagination-link1").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link3").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link4").style.color = "var(--paragraph-text-clr)";

document.getElementById("roster-search-results-ul1").style.display = "none";
document.getElementById("roster-search-results-ul2").style.display = "flex";
document.getElementById("roster-search-results-ul3").style.display = "none";
document.getElementById("roster-search-results-ul4").style.display = "none";
}

function pageLinkThree() {
document.getElementById("pagination-backward").style.opacity = 1;
document.getElementById("pagination-forward").style.opacity = 1;
document.getElementById("pagination-link3").style.color = "var(--secondary-clr)";
document.getElementById("pagination-link1").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link2").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link4").style.color = "var(--paragraph-text-clr)";
document.getElementById("roster-search-results-ul1").style.display = "none";
document.getElementById("roster-search-results-ul2").style.display = "none";
document.getElementById("roster-search-results-ul3").style.display = "flex";
document.getElementById("roster-search-results-ul4").style.display = "none";
}

function pageLinkFour() {
document.getElementById("pagination-backward").style.opacity = 1;
document.getElementById("pagination-forward").style.opacity = 0.1;
document.getElementById("pagination-link4").style.color = "var(--secondary-clr)";
document.getElementById("pagination-link1").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link2").style.color = "var(--paragraph-text-clr)";
document.getElementById("pagination-link3").style.color = "var(--paragraph-text-clr)";
document.getElementById("roster-search-results-ul1").style.display = "none";
document.getElementById("roster-search-results-ul2").style.display = "none";
document.getElementById("roster-search-results-ul3").style.display = "none";
document.getElementById("roster-search-results-ul4").style.display = "flex";
}
