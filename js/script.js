const yearEl = document.querySelector(".year");
const btnMobileNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

/////////////////////////////////////
// Update to current year //
/////////////////////////////////////
yearEl.textContent = new Date().getFullYear();
btnMobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////
// Adding scroll effect to all links //
/////////////////////////////////////
const linkEls = document.querySelectorAll("a:link");
linkEls.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains(main - nav - link))
      headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////
// Adding sticky Nav bar //
/////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


