
/*Variables for CSS*/
:root {
    /*Fonts*/
    --ff-Jaldi: "Jaldi", sans-serif;
    --ff-Istok-Web: "Istok-Web", sans-serif;
    --ff-Noto: "Noto Sans", sans-serif;

    /*Colors*/
    --white: rgb(255, 255, 255);
    --black-currant: rgb(14, 5, 15); 
    --hero-bg-overlay: rgb(14, 5, 15, 0.7);
    --navibar-bg-transparent: rgb(45, 22, 116, 0.08);
    --darker-blue-primary: rgb(45, 22, 116);
    --darker-blue-primary-nav-transparent: rgb(45, 22, 116, 0.97);
    --darker-blue-primary-transparent: rgb(45, 22, 116, 0.5);
    --light-purple-primary: rgb(146, 113, 194);
    --title-purple: rgb(163, 118, 243);
    --garrison-red: rgb(132, 19, 19);
    --genre-edm-purple: rgb(112, 58, 207, 0.6);

    /*Outliner*/
    --outline: 2px solid var(--garrison-red);
}

html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--black-currant);
}

header {
    position: relative;
    overflow: hidden;
    height: 730px;
    width: 100%;
    background-image: url("Images/Content/hanny-naibaho-aWXVxy8BSzc-unsplash(1).jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 18%;
    font-family: var(--ff-Jaldi);
}

/*Ignore This*/
@media (max-width: 768px) {
    header {
      height: 70vh;  /* Adjust height for smaller screens */
    }
}

.bg-overlay {
    position: absolute;
    background-color: var(--hero-bg-overlay);
    width: 100%;
    height: 730px;
}

p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

a {
   text-decoration: none;
}

ul, li {
    list-style-type: none;
}

.hero-wrapper {
    position: relative;
    width: 100%;
    margin-top: 6.5rem;
    animation-name: heroWrapperCpy;
    animation-duration: 2s;
    opacity: 1;
}

@keyframes heroWrapperCpy {
    0% {bottom: -200px; opacity: 0;}
    100% {bottom: 0px; opacity: 1;}
}

.hero-welcome-heading {
    position: relative;
    width: 100%;
    font-family: var(--ff-Jaldi);
    color: white;
    font-size: 60px;
    text-align: center;
}

.hero-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5rem;
    margin-top: 1rem;
}

/*Start of Welcome Pitch Box*/
.welcome-pitch-wrapper {
    background-color: rgb(0, 0, 0, 0.4);
    border-radius: 15px;
    padding: 2rem;
    display: grid;
    place-content: start;
    justify-content: left;
    align-items: center;
    gap: 1rem;
}

.welcome-pitch-message {
    color: white;
    font-family: var(--ff-Jaldi);
    font-weight: 100;
    line-height: 35px;
    font-size: 25px;
    letter-spacing: 0.1px;
}

.welcome-pitch-points-list {
    display: grid;
    place-content: start;
    gap: 1rem;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}

.welcome-pitch-points {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 18px;
    font-family: var(--ff-Jaldi);
}

.icon-wrapper {
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: relative;
    display: grid;
    place-content: center;
}

.icon-wrapper i {
    color: var(--light-purple-primary);
    font-size: 25px;
}
/*End of Welcome Pitch Box*/


/*Start of Artists Display Cards and Call To Action Elements*/
.artist-display-cta-wrapper {
    position: relative;
    display: grid;
    place-content: center;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.artist-display-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;
}

.artist-display-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.artist-display-img:nth-child(2) {
    position: absolute;
    width: 220px;
    height: 220px;
    z-index: 3;
}

.cta-wrapper {
    display: grid;
    place-content: center;
    gap: 10px;
    width: 100%;
}

.cta-text {
    display: grid;
    place-content: center;
    place-items: center;
    gap: 10px;
    color: white;
    font-family: var(--ff-Jaldi);
    text-align: center;
    width: 500px;
    line-height: 25px;
    font-size: 20px;
    margin-top: 20px;
    text-shadow: 4px 4px 20px black;
}

.cta-text-span {
    padding: 8px 25px;
    background-color: white;
    color: var(--darker-blue-primary);
    border-radius: 150px;
    text-shadow: none;
}

.cta-btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cta-btn {
    margin-top: 10px;
    background-color: var(--darker-blue-primary);
    color: white;
    padding: 10px 35px;
    text-transform: uppercase;
    border-left: 6px solid white;
    font-family: var(--ff-Jaldi);
    transition: linear 0.2s;
    width: fit-content;

}

.cta-btn:hover {
    background-color: white;
    color: var(--darker-blue-primary);
    border-width: 100%;
    transition: linear 0.2s;
    letter-spacing: 0.3px;
    font-weight: 550;
}
/*End of Artists Display Cards and Call To Action Elements*/


/* Navigation bar*/
.space {
    z-index: 10;
    background-color: rgb(0, 0, 0, 0.2);
    position: fixed;
    display: flex;
    align-items: center;
    padding-inline: 55px;
    padding-bottom: 0px;
    gap: 20rem;
    width: 100vw;
    transition: linear 0.2s;
}

/**/
.space-scroll {
    z-index: 10;
    background-color: var(--darker-blue-primary-nav-transparent);
    position: fixed;
    display: flex;
    align-items: center;
    padding-inline: 55px;
    padding-bottom: 0px;
    gap: 20rem;
    width: 100vw;
    transition: linear 0.2s;
}
/**/

.logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
}

.logo {
    object-fit: cover;
    width: 80px;
    height: 80px;
}

.logo-name {
    font-family: var(--ff-Jaldi);
    font-size: 16px;
    color: white;
    width: max-content;
}

.search-and-user-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-and-user-wrapper {
    width: fit-content;
}

.search-bar-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-bar-wrapper i {
    position: absolute;
}

.openSearchEl {
    background-color: var(--darker-blue-primary-transparent);
    border: none;
    padding: 12px;
    font-size: 17px;
    height: 15px;
    width: 15px;
    color: white;
    border-radius: 50%;
}

.search-bar-new-icon {
    position: absolute;
}

.newSearchEl {
    background-color: var(--darker-blue-primary-transparent);
    border-radius: 150px;
    border: none;
    padding: 12px;
    font-size: 17px;
    height: 10px;
    color: white;
}

.newSearchEl:focus {
    outline: none;
}

#searchEl::placeholder {
    color: white;
    font-size: 13px;
}

.navibar-menu-space {
    font-family: monospace;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items:center;
}

.navibar-user-space i {
    font-size: 22px;
}

.navibar-user-space {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    width: max-content;
}

.navibar-menu-list {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;
    font-family: var(--ff-Istok-Web);
}

.navibar-menu-list-item {
    width: max-content;
}

.navibar-menu-list-item a, .login-btn {
    color: white;
}

.navibar-menu-list-item a:visited, .login-btn:visited {
    color: white;
}

.navibar-menu-list-item a:focus {
    color: var(--light-purple-primary);
    outline: none;
}



/*Start of Main Content*/

main {
    max-width: 1000px;
    max-width: 1100px;
    margin: auto;
}

main > * {
    color: white;
}

img {
  object-fit: cover;
}

.section-break-hr {
    border: none;
    border-top: 1px solid var(--light-purple-primary);
}

section {
    margin-block: 4rem 2rem;
}

.grid-section {
    width: 100%;
}

/*Start of Featured Artists Section*/
.featured-artists-section {
    display: grid;
    width: 100%;
    gap: 1rem;
}

.section-description {
    font-family: var(--ff-Jaldi);
}

.featured-artists-card-wrapper {
    display: flex;
    justify-content: space-between;
}

.featured-artists-card {
    position: relative;
    display: grid;
    gap: 0rem;
    background-color: white;
    width: 235px;
    height: 270px;
    cursor: pointer;
    overflow: hidden;
    -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
    -o-transition: all 0.3s;
	transition: all 0.3s;
}

.featured-artists-card .fotn-card-label-wrapper {
    display: grid;
    place-content: start;
    place-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 81.5%;
    left: 0%;
    text-align: center;
    background-color: rgba(23, 10, 83, 0.6);
}

.featured-artists-bio-text {
    display: none;
    font-family: var(--ff-Jaldi);
}

.featured-artists-card:hover .fotn-card-label-wrapper, .featured-artists-bio-text {
    display: grid;
}

.featured-artists-card:hover .fotn-card-label-wrapper {
    animation-name: ftArtistsLabelWrapper;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
}

@keyframes ftArtistsLabelWrapper {
    0% {
        opacity: 0;
    }

    100% {
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        opacity: 1;
    }
}

.featured-artists-card .fotn-card-label-wrapper .fotn-card-label {
    color: white;
    margin-bottom: 2rem;
}

.featured-artists-card img {
    object-fit: cover;
    width: 100%;
    height: 270px;
}

/*Social Media Icon Wrapper*/
.social-media-wrapper {
    background-color: rgb(0, 0, 0, 0.5);
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 7px;
}

/* Wrapper */
.icon-button {
    background-color: white;
	border-radius: 3.6rem;
	cursor: pointer;
	display: inline-block;
	font-size: 1.0rem;
	height: 2rem;
	line-height: 2rem;
	margin: 0 5px;
	position: relative;
	text-align: center;
	-webkit-user-select: none;
	   -moz-user-select: none;
	    -ms-user-select: none;
	        user-select: none;
	width: 2rem;
}

/* Circle */
.icon-button span {
	border-radius: 0;
	display: block;
	height: 0;
	left: 50%;
	margin: 0;
	position: absolute;
	top: 50%;
	-webkit-transition: all 0.3s;
	   -moz-transition: all 0.3s;
	     -o-transition: all 0.3s;
	        transition: all 0.3s;
	width: 0;
}
.icon-button:hover span {
	width: 2rem;
	height: 2rem;
	border-radius: 2rem;
	margin: -1rem;
}

.spotify span {
    background-color: green;
}

.instagram span {
    background-color: #bc2a8d;
}
  
.twitter span {
	background-color: black;
}

.facebook span {
	background-color: rgb(44, 62, 177);
}

.tiktok span {
	background-color: rgb(98, 22, 73);
}

/* Icons */
.icon-button i {
	background: none;
	color: var(--darker-blue-primary);
	height: 2rem;
	left: 0;
	line-height: 2rem;
	position: absolute;
	top: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
    -o-transition: all 0.3s;
	transition: all 0.3s;
	width: 2rem;
	z-index: 10;
}

.icon-button:hover .fa-x-twitter,
.icon-button:hover .fa-instagram,
.icon-button:hover .fa-spotify,
.icon-button:hover .fa-facebook,
.icon-button:hover .fa-tiktok {
	color: white;
}

.see-more-link {
    color: var(--light-purple-primary);
    font-family: var(--ff-Jaldi);
    font-size: 25px;
}

/*End of Social Media Wrapper*/


/*End of Featured Artists Section*/

.fotn-section {
    display: grid;
    place-content: start;
    gap: 2rem;
}

.section-header {
    width: 100%;
}

.section-heading {
    color: var(--title-purple);
    font-family: var(--ff-Jaldi);
    font-size: 50px;
}

.fotn-content-wrapper {
    display: flex;
    position: relative;
    gap: 1rem;
}

.fotn-container-one > * {
    border: 1px solid var(--genre-edm-purple);
}

.fotn-container-one {
    display: grid;
    gap: 1rem;
}

.fotn-card-one {
    width: fit-content;
    background-color: var(--white);
    display: grid;
    width: 465px;
    place-content: start;
    padding: 1.5rem 3rem 3rem 3rem;
    gap: 1rem;
}

.fotn-card-one-heading {
    color: var(--title-purple);
    font-family: var(--ff-Istok-Web);
    font-size: 38px;
}

.fotn-card-one-text-wrapper {
    display: grid;
    gap: 1rem;
}

.fotn-card-one-text {
    color: var(--black-currant);
    font-family: var(--ff-Jaldi);
    line-height: 20px;
}

.fotn-card-one-text span {
    color: var(--title-purple);
    font-weight: bold;
}

.fotn-card-one-link-wrapper {
    margin-top: 1rem;
}

.fotn-card-one-link {
    border: 1px solid var(--genre-edm-purple);
    padding: 10px 15px;
    color: var(--genre-edm-purple);
    font-family: var(--ff-Jaldi);
    font-weight: bold;
    text-transform: uppercase;
    transition: linear 0.2s;
}

.fotn-card-one-link:hover {
    background-color: var(--genre-edm-purple);
    border: none;
    transition: linear 0.2s;
    color: white;
    border-radius: 5px;
}

.fotn-card-two {
    position: relative;
    display: grid;
    place-content: start;
    position: relative;
    height: 480px;
    cursor: pointer;
}

.fotn-card-two img {
    object-fit: cover;
    width: 561px;
    height: 480px;
}

.fotn-card-label-wrapper {
    position: absolute;
    top: 20px;
    left: -10px;
    background-color: var(--darker-blue-primary);
}

.fotn-card-label {
    font-family: var(--ff-Jaldi);
    padding: 8px 10px;
    letter-spacing: 0.6px;
    font-weight: 600;
    font-size: 20px;
}

.fotn-card-two-text-underlay {
    position: absolute;
    bottom: 0;
    background-color: var(--genre-edm-purple);
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
}

.fotn-card-two-text-wrapper {
    border-left: 10px solid white;
    margin: 1rem;
    padding: 10px;
}

.fotn-card-two-text {
    font-family: var(--ff-Istok-Web);
    padding-left: 5px;
    font-size: 40px;
    line-height: 45px;
    font-weight: bold;
}

.fotn-container-two {
    display: grid;
    gap: 1rem;
    place-content: start;
    position: relative;
}

.fotn-card-three {
    width: 100%;
    position: relative;
    display: grid;
    border: 1px solid var(--genre-edm-purple);
}

.fotn-card-img {
    object-fit: cover;
    width: 100%;
    height: 500px;
}

.fotn-card-img-overlay {
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    width: 300px;
    height: 300px;
    position: absolute;
}


/*Play Button*/

.play-button-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 15px;
    background-color: var(--hero-bg-overlay);
}

.player-box {
    display: flex;
    align-items: center;
    padding-left: 15px;
}

.player-box-song-name {
    display: flex;
    align-items: center;
    width: 400px;
    position: absolute;
    font-weight: bold;
    letter-spacing: 1px;
    top: 5px;
    left: 65px;
    font-size: 25px;
    font-family: var(--ff-Jaldi);
}

.player-box-song-name-spans {
    display: flex;
    align-items: center;
    position: absolute;
    gap: 10px;
    padding-inline: 15px;
    border-radius: 150px;
    top: 15px;
    left: 250px;
    background-color: var(--genre-edm-purple);
}

.player-box-song-name-spans span {
    display: flex;
    border-radius: 150px;
    font-weight: lighter;
    letter-spacing: 1px;
    font-family: var(--ff-Jaldi);
    color: white;
    font-size: 18px;
}

.music-play-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: none;
}

#play-btn {
    display: block;
}

.music-play-button i {
    color: white;
    font-size: 40px;
}

#progress {
    position: absolute;
    -webkit-appearance: none;
    width: 445px;
    height: 6px;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 50px;
}

#progress::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--darker-blue-primary);
    border: 2px solid #fff;
}

.fotn-card-four {
    position: relative;
    display: flex;
    width: 100%;
    height: 330.5px;
    gap: 1rem;
}

.fotn-card-upcoming-wrapper {
    border: 1px solid var(--genre-edm-purple);
    position: relative;
    width: 100%;
    height: 100%;
    transition: linear 0.2s;
    cursor: pointer;
}

.fotn-card-upcoming-wrapper .fotn-card-label-wrapper {
    width: 100%;
    text-align: center;
    top: 280.5px;
    left: 0px;
    height: fit-content;
    background-color: var(--genre-edm-purple);
}

.fotn-card-upcoming-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.see-bio-link {
    display: none;
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid white;
    top: 12%;
    right: 0%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    color: white;
    font-family: var(--ff-Jaldi);
    z-index: 10;
}

.see-bio-link {
    padding: 10px;
}


.fotn-card-two:hover .see-bio-link, .fotn-card-upcoming-wrapper:hover .see-bio-link {
    display: grid;
    transition: linear 0.2s;
}


/*End of Fresh On The Net Section*/

/*Start of The Curated Genres*/ 
#curated-genres-section {
    display: grid;
    gap: 2rem;
}

#curated-genres-section .section-header {
    display: flex;
    justify-content: center;
}

.curated-genres-content-wrapper {
    padding: 2rem;
    border-inline: 1px solid var(--light-purple-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.curated-genres-ablum-wrapper {
    display: grid;
}

.curated-genres-ablum {
    cursor: pointer;
    position: relative;
    width: 280px;
}

.curated-genres-ablum-img {
    object-fit: cover;
    width: 100%;
}

.curated-genres-ablum-title {
    font-family: var(--ff-Jaldi);
}



/* More from FrontEnd Soundz */

  
.grid
{display:grid;
  row-gap:1rem;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(3,1fr);
  
}

.grid p{color: black;padding: 20px;  font-family: var(--ff-Jaldi);}
.grid h2{color: black;padding: 40px,0;  font-family: var(--ff-Jaldi);font-size: 40px;}
.grid span{color: black;  font-family: var(--ff-Jaldi);font-size: 40px;font-size: 16px;}
.button{color: black; background-color: var(--genre-edm-purple);  font-family: var(--ff-Jaldi);}

.card{background-color:var(--white);}

.card img{height: 400px;width: 100%; padding: 3px;border-radius: 30px;}

/*I changed your width from 600px to 100%

Reason being that when you have a set width on your image it is going to go further than the width of the parent div.

Whereas if I put it at 100%, it goes to the full length of the parent div without going futher than the parent div. 

:) Problem solved, i think....

*/
