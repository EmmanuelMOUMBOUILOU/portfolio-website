// SCROLL ANIMATION

const sections = document.querySelectorAll(".section");
const cards = document.querySelectorAll(".card, .project-card, .timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.1,
  }
);

// Observe sections
sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Observe cards
cards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});


// ACTIVE NAV LINK

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});


// SMALL PARALLAX EFFECT

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  let scrollPosition = window.scrollY;

  hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";

});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// SCROLL TOP BUTTON

const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

});

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});
