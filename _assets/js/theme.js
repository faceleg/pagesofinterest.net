// chat.openai.com/share/7ba3169c-e983-46d3-ae5c-670dab33141d

/**
 * Handles the visibility of the alertbar based on the scroll position.
 * @param {Event} event - The scroll event.
 */
document.addEventListener("scroll", function () {
  // Get the vertical scroll position
  const y = window.scrollY || document.documentElement.scrollTop;
  // Select the alertbar element
  const alertbar = document.querySelector(".alertbar");
  if (!alertbar) {
    return;
  }
  // Show or hide the alertbar based on scroll position
  alertbar.style.display = y > 280 ? "block" : "none";
});

// Hide Header on scroll down
let didScroll = false;
let lastScrollTop = 0;
const delta = 5;

// Listen for scroll events
window.addEventListener("scroll", function () {
  // Set the didScroll flag to true when a scroll event occurs
  didScroll = true;
});

// Check if the user has scrolled at intervals
setInterval(function () {
  // If the user has scrolled, call the hasScrolled function
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

/**
 * Handles the visibility of the header based on the scroll position.
 */
function hasScrolled() {
  const navbar = document.querySelector("nav");

  // Get the current scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // Get the height of the viewport
  const windowHeight = window.innerHeight;
  // Get the total height of the document
  const scrollHeight = document.documentElement.scrollHeight;

  // Check if the scroll difference is greater than the delta value
  if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

  // If the user scrolled down and is past the navbar, hide the navbar
  if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
    navbar.classList.remove("nav-down");
    navbar.classList.add("nav-up");
    navbar.style.top = -navbar.offsetHeight + "px";
  } else {
    // If the user scrolled up or is at the top, show the navbar
    if (scrollTop + windowHeight < scrollHeight) {
      navbar.classList.remove("nav-up");
      navbar.classList.add("nav-down");
      navbar.style.top = "0px";
    }
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
}

// Adapted from https://ben.balter.com/2014/03/13/pages-anchor-links/ with https://sl.bing.net/UY7c2w7Cdo

/**
 * This function adds a link icon to each header element that has an id attribute.
 * The link icon is clickable and redirects to the same header element.
 */
// Select all header elements from h2 to h6
const headers = document.querySelectorAll("h2, h3, h4, h5, h6");
// Loop through each header element
for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  // Get the id attribute of the header element
  const id = header.getAttribute("id");
  // If the header element has an id attribute
  if (id) {
    console.log(id);
    // Create a link element with the same id as the href attribute
    const linkBefore = document.createElement("a");
    linkBefore.classList.add("header-link", "header-link-before");
    linkBefore.setAttribute("href", "#" + id);
    linkBefore.innerHTML =
      "<svg class=\"svg-link\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z\"/></svg>";

    const linkAfter = document.createElement("a");
    linkAfter.classList.add("header-link", "header-link-after");
    linkAfter.setAttribute("href", "#" + id);
    linkAfter.innerHTML =
      "<svg class=\"svg-link\" xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 640 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z\"/></svg>";
    // Prepend the link element to the header element
    header.insertBefore(linkBefore, header.firstChild);
    header.innerHTML += linkAfter.outerHTML;
  }
}
