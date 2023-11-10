//chat.openai.com/share/7ba3169c-e983-46d3-ae5c-670dab33141d

/**
 * Handles the visibility of the alertbar based on the scroll position.
 * @param {Event} event - The scroll event.
 */
https: document.addEventListener("scroll", function (event) {
  // Get the vertical scroll position
  var y = window.scrollY || document.documentElement.scrollTop;
  // Select the alertbar element
  var alertbar = document.querySelector(".alertbar");
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
  var st = window.scrollY || document.documentElement.scrollTop;
  // Get the height of the viewport
  const windowHeight = window.innerHeight;
  // Get the total height of the document
  const scrollHeight = document.documentElement.scrollHeight;

  // Check if the scroll difference is greater than the delta value
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If the user scrolled down and is past the navbar, hide the navbar
  if (st > lastScrollTop && st > navbar.offsetHeight) {
    navbar.classList.remove("nav-down");
    navbar.classList.add("nav-up");
    navbar.style.top = -navbar.offsetHeight + "px";
  } else {
    // If the user scrolled up or is at the top, show the navbar
    if (st + windowHeight < scrollHeight) {
      navbar.classList.remove("nav-up");
      navbar.classList.add("nav-down");
      navbar.style.top = "0px";
    }
  }

  // Update the last scroll position
  lastScrollTop = st;
}
