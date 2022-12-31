let iconMenu = document.getElementById("iconMenu");
let menu = document.querySelector(".menu");
let menu_icon = document.querySelector("#menu_icon");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav #actionsNav ul li a");

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

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
