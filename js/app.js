/**
 * Check if the html webpage has finished loading before running any function
 */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // build the navigation
  navigation(sections);

  // add a click event listener to the hamburger menu icon
  addClickEventListener();

  // highlight the current active section
  activeSection();
});

/**
 * Loop through all the sections and start building the navigation menu
 * @param  sections all the sections found within the html webpage
 * @returns 
 */
const navigation = (sections) => {
  for (const section of sections) {
    const sectionName = section.dataset.nav;
    createNavigation(sectionName);
  }
};

/**
 * Add an eventClick listener to the menu icon
 */
const addClickEventListener = () => {
  const hamburgerMenu = document.getElementById("menu__icon");
  hamburgerMenu.addEventListener("click", menuAction);
};

/**
 * Highlight the current active section
 */
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

/**
 * Build the navigation menu
 * @param sectionName A single section within a html webpage
 */
const createNavigation = (sectionName) => {
  let navBar = document.createElement(`a`);

  let newContent = document.createTextNode(sectionName);

  navBar.appendChild(newContent);

  navBar.setAttribute("href", `#${sectionName}`);

  let currentDiv = document.getElementById("navbar__list");

  currentDiv.appendChild(navBar);
};

/**
 * Display or hide the menu bar based on whether the hamburger menu is clicked or not
 */
const menuAction = () => {
  const navbar = document.getElementById("navbar__list");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
};

/**
 * Remove a class from a set of elements
 */
const removeActiveClass = () => {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    section.classList.remove(`your-active-class`);
  }
};

/**
 * Add a class to an element
 * @param section The section to add a class
 */
const addActiveClass = (section) => {
  section.classList.add(`your-active-class`);
};
