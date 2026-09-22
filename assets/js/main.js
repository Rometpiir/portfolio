// Formspree code (Kontrollib, kas vorm on lehel olemas)
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (status) status.innerHTML = "Your message has been sent.";
      if (document.querySelector(".alert_style")) document.querySelector(".alert_style").style.display = "block";

      setTimeout(function () {
        if (document.querySelector(".alert_style")) document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      if (form) form.reset();
    })
    .catch((error) => {
      if (status) status.innerHTML = "Oops! There was a problem delivering your message, please contact via other means.";
      if (document.querySelector(".alert_style")) document.querySelector(".alert_style").style.display = "block";

      setTimeout(function () {
        if (document.querySelector(".alert_style")) document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}

// NAVIGATION PANEL
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (navMenu) navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    if (navMenu) navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  if (navMenu) navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    if (skillContentArr[idx]) skillContentArr[idx].classList.toggle("skills_open");
  });
});

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");

if (workheader && educationheader) {
  workheader.style.color = "var(--first-color)";
  educationheader.style.color = "var(--text-color)";

  educationheader.addEventListener("click", () => {
    let condition1 = work.classList.contains("qualification-inactive");
    if (!condition1) {
      education.classList.remove("qualification-inactive");
      work.classList.add("qualification-inactive");
      workheader.style.color = "var(--text-color)";
      educationheader.style.color = "var(--first-color)";
    }
  });

  workheader.addEventListener("click", () => {
    let condition2 = education.classList.contains("qualification-inactive");
    if (!condition2) {
      work.classList.remove("qualification-inactive");
      education.classList.add("qualification-inactive");
      educationheader.style.color = "var(--text-color)";
      workheader.style.color = "var(--first-color)";
    }
  });
}

// PORTFOLIO SWIPER (Ainult siis, kui swiper element on lehel)
if (document.querySelector(".mySwiper") && typeof Swiper !== 'undefined') {
  let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
}

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    const link = document.querySelector(".nav_menu a[href*=" + sectionId + "]");
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (nav) {
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUpfunc);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-moon";

if (themeButton) {
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);

  themeButton.addEventListener("click", () => {
    if (document.body.classList.contains(darkTheme)) {
      document.body.classList.remove(darkTheme);
      themeButton.classList.remove(iconTheme);
    } else {
      document.body.classList.add(darkTheme);
      themeButton.classList.add(iconTheme);
    }
  });
}

// Typing Animation using Typed JS (Ainult siis, kui .type element on lehel)
if (document.querySelector(".type") && typeof Typed !== 'undefined') {
  var typed = new Typed(".type", {
    strings: ["a Web", "an Android", "a Blockchain"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 130,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });
}

/* ==========================================
   PROJEKTIDE MODALID (Aknad)
   ========================================== */

// Windows Modali avamine ja sulgemine
function openModal() {
  const winModal = document.getElementById('projectModal');
  if (winModal) winModal.style.display = 'block';
}

function closeModal() {
  const winModal = document.getElementById('projectModal');
  if (winModal) winModal.style.display = 'none';
}

// Linux Modali avamine ja sulgemine
function openLinuxModal() {
  const linuxModal = document.getElementById('linuxModal');
  if (linuxModal) linuxModal.style.display = 'block';
}

function closeLinuxModal() {
  const linuxModal = document.getElementById('linuxModal');
  if (linuxModal) linuxModal.style.display = 'none';
}

// Sulge aken, kui vajutatakse väljapoole akent
window.addEventListener('click', function(event) {
  const winModal = document.getElementById('projectModal');
  const linuxModal = document.getElementById('linuxModal');

  if (event.target === winModal) {
    winModal.style.display = 'none';
  }
  if (event.target === linuxModal) {
    linuxModal.style.display = 'none';
  }
});
