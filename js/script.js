let iconMenu = document.getElementById("iconMenu");
let menu = document.querySelector(".menu");
let menu_icon = document.querySelector("#menu_icon");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .menu ul li");

menu_icon.onclick = () => {
  menu.classList.toggle("open");
  if (iconMenu.src.match("./assets/icons/List.svg")) {
    iconMenu.src = "./assets/icons/X.svg";
  } else {
    iconMenu.src = "./assets/icons/List.svg";
  }
};

document.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {});
