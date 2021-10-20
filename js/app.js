// function to run when a html webpage finishes to load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // build the navigation
  navigation(sections);

  // add a click event listener to the hamburger menu icon
  addClickEventListener();

  // highlight the current active section
  activeSection();
});

// function to loop through the section elements and start building the navigation menu
const navigation = (sections) => {
  for (const section of sections) {
    const sectionName = section.dataset.nav;
    createNavigation(sectionName);
  }
};

// function that defines what happens when the menu is clicked
const addClickEventListener = () => {
  const hamburgerMenu = document.getElementById("menu__icon");
  hamburgerMenu.addEventListener("click", menuAction);
};

// function to higlight the current active section
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

// helper function to build the navigation menu
const createNavigation = (sectionName) => {
  let navBar = document.createElement(`a`);

  let newContent = document.createTextNode(sectionName);

  navBar.appendChild(newContent);

  navBar.setAttribute("href", `#${sectionName}`);

  let currentDiv = document.getElementById("navbar__list");

  currentDiv.appendChild(navBar);
};

// helper function to hide or display the menu items in the hamburger menu
const menuAction = () => {
  const navbar = document.getElementById("navbar__list");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
};

// helper function to remove a class from a set of elements
const removeActiveClass = () => {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    section.classList.remove(`your-active-class`);
  }
};

// helper function to add a class to a specific element
const addActiveClass = (section) => {
  section.classList.add(`your-active-class`);
};
