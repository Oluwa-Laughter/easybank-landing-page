"use-strict";
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

const btnNavMenu = function (e) {
  e.preventDefault();
  header.classList.toggle("nav-open");
};

btnMobileNav.addEventListener("click", btnNavMenu);

const heroSection = document.querySelector(".hero-section");
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};
const stickyObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.01,
  rootMargin: `${headerHeight}px`,
});

stickyObserver.observe(heroSection);
