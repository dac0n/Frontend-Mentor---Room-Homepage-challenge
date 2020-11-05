let views = [
  {
    headline:   "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
    imageSrc: "./images/desktop-image-hero-1.jpg"
  },
  {
    headline: "We are available all across the globe",
    description:     `With stores all over the world, it\'s easy for you to find furniture for your home or place of 
    business. Locally, we’re in most major cities throughout the country. Find the branch nearest you 
    using our store locator. Any questions? Don\'t hesitate to contact us today.`,
    imageSrc: "./images/desktop-image-hero-2.jpg"
  },
  {
    headline: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced 
    technology to ensure that every product is made as perfect and as consistent as possible. With three 
    decades of experience in this industry, we understand what customers want for their home and office.`,
    imageSrc: "./images/desktop-image-hero-3.jpg"
  }
]

let mediaCheck = window.matchMedia("(min-width: 768px)")

const headline = document.getElementById("headline");
const description = document.getElementById("description");
const image = document.getElementById("image-adaptive")
const buyButton = document.getElementById("buy");
const openMenu = document.getElementById("open-menu");
const navMenu = document.getElementById("menu");
const placeholder = document.getElementById("placeholder");
const logo = navMenu.firstElementChild;

let logoClone = logo.cloneNode(true);
let navMenuClone = navMenu.cloneNode(true);
let toggleNavMenu = 1;
let nextItemButton = document.getElementsByClassName('btn-arrow');
let textAmount = views.length;
let currentText = 0;

openMenu.addEventListener("click", toggleMenu, false);

window.onload = () => {
  if (!mediaCheck.matches) toggleMenu();
  document.getElementById("hide-all").style.display = "none";
} 
changeText(currentText);


function toggleMenu() {
  if (toggleNavMenu) {
    navMenu.innerHTML = logoClone.innerHTML;  //shows logo
    let dinamicalPadding = (((window.screen.width/2-(navMenu.offsetWidth-40)/2)/window.screen.width)*100).toFixed(3)+'%';
    navMenu.style.right = dinamicalPadding;
    placeholder.style.display = "none";
    openMenu.src = "./images/icon-hamburger.svg";
    toggleNavMenu = 0;
  }
  else {
    navMenu.innerHTML = navMenuClone.innerHTML;   //shows navigation menu
    navMenu.style.right = '5%';
    placeholder.style.display = "block";
    openMenu.src = "./images/icon-close.svg";
    toggleNavMenu = 1;
  }
};

function changeText(index){
    currentText = index<0 ? textAmount-1 : index>2 ? 0 : index;  //allows to go from last array element to first and vice versa
    headline.innerHTML = views[currentText].headline;
    description.innerHTML = views[currentText].description;
    image.src = views[currentText].imageSrc;
}


