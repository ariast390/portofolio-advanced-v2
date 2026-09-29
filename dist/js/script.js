const mobileMenuButton = document.getElementById("mobile-menu-button");
const hamburgerIcon = mobileMenuButton.querySelector("svg#hamburger-icon");
const closeIcon = mobileMenuButton.querySelector("svg#close-icon");
const mobileMenu = document.getElementById("mobile-menu");

// Event listener untuk mobile menu button
mobileMenuButton.addEventListener("click", () => {
  const expanded =
    mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Event listener untuk dokumen
document.addEventListener("click", (event) => {
  const isClickInsideMobileMenu = mobileMenu.contains(event.target);
  const isClickInsideMobileMenuButton = mobileMenuButton.contains(event.target);

  // Jika klik diluar kotak mobile menu dan mobile menu button, sembunyikan mobile menu
  if (!isClickInsideMobileMenu && !isClickInsideMobileMenuButton) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", false);
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// border Navbar while Scrolling
const navbar = document.querySelector("nav");
let scrollPosition = 0;

window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("scroll-border");
  } else {
    navbar.classList.remove("scroll-border");
  }
});
// border navbar end

// hidden up btn
const scrollButton = document.getElementById("scrollButton");

function toggleScrollButton() {
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  const triggerPosition = 0.4; // 40% of the page height

  if ((scrollPosition + windowHeight) / documentHeight > triggerPosition) {
    scrollButton.style.opacity = 1;
  } else {
    scrollButton.style.opacity = 0;
  }
}

function hideScrollButtonOnLoad() {
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  if (windowHeight === 0) {
    // If the windowHeight is still 0, it means the page is still loading
    scrollButton.style.opacity = 0; // Hide the button
  } else {
    // Otherwise, check the scroll position and show/hide the button accordingly
    toggleScrollButton();
  }
}

// Call the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", hideScrollButtonOnLoad);

// Add event listener to handle scroll
document.addEventListener("scroll", toggleScrollButton);
// hidden up btn end

// darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});

const darkToggleMobile = document.querySelector("#dark-toggle-mobile");
const htmlMobile = document.querySelector("html");

darkToggleMobile.addEventListener("click", function () {
  if (darkToggleMobile.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
// darkmode toggle end

// AOS init (script ini harus dimuat SETELAH aos.js)
if (typeof AOS !== "undefined") {
  AOS.init();
}
// AOS init end
