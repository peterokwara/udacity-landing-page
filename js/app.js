/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  navigation(sections);
  addClickEventListener();
  activeSection();
});

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const createNavigation = (sectionName) => {
  let navBar = document.createElement(`a`);

  let newContent = document.createTextNode(sectionName);

  navBar.appendChild(newContent);

  navBar.setAttribute("href", `#${sectionName}`);

  let currentDiv = document.getElementById("navbar__list");

  currentDiv.appendChild(navBar);
};

const menuAction = () => {
  const navbar = document.getElementById("navbar__list");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
};

const activeSection = () => {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom >= 0) {
        removeActiveClass();
        addActiveClass(section);
      }
    }
  });
};

const removeActiveClass = () => {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    section.classList.remove(`your-active-class`);
  }
};

const addActiveClass = (section) => {
  section.classList.add(`your-active-class`);
};

const addClickEventListener = () => {
  const hamburgerMenu = document.getElementById("menu__icon");
  hamburgerMenu.addEventListener("click", menuAction);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
const navigation = (sections) => {
  for (const section of sections) {
    const sectionName = section.dataset.nav;
    createNavigation(sectionName);
  }
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
