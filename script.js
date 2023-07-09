// Navigation func
// Implement nav link hovering effect
function navigationFunc() {
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-item a");
  // Select each nav link element
  navLinks.forEach((navLink) => {
    navLink.addEventListener("mouseover", (e) => {
      const underlineEl = e.target.nextElementSibling;
      underlineEl.classList.remove("hidden");
    });
    navLink.addEventListener("mouseleave", (e) => {
      const underlineEl = e.target.nextElementSibling;
      underlineEl.classList.add("hidden");
    });
  });
}
navigationFunc();

function asideController() {
  const asideNav = document.querySelector(".aside-nav");
  const header = document.querySelector(".header");
  const backToTopBtn = document.querySelector(".back-to-top");

  const headerObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        asideNav.classList.remove("hidden");
        backToTopBtn.classList.remove("hidden");
      } else {
        asideNav.classList.add("hidden");
        backToTopBtn.classList.add("hidden");
      }
    },
    {
      rootMargin: "-100px",
    }
  );

  headerObserver.observe(header);
}
asideController();

function smoothRevealProject() {
  const projectsSection = document.querySelector("#projects-section");
  const projects = document.querySelectorAll(".project");
  const projectBtns = document.querySelectorAll(".project-learn-more-btn");
  const projectObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        projectBtns.forEach((btn) => {
          btn.classList.remove("hidden");
        });
        projects.forEach((project) => {
          project.classList.add("visible");
        });
      }
    },
    {
      rootMargin: "-50px",
      threshold: 0.2,
    }
  );
  projectObserver.observe(projectsSection);
}

smoothRevealProject();

function mapController() {
  const coords = [9.68843, 39.544297];
  const map = L.map("map", {
    maxZoom: 13,
  }).setView(coords, 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(coords).addTo(map).bindPopup("Hello 👋").openPopup();
}

mapController();

function rotateArrows() {
  const eduSection = document.querySelector("#education-section");

  const arrows = document.querySelectorAll(".arrow");

  const eduObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        arrows.forEach((arrow) => {
          arrow.classList.add("rotate");
        });
      }
    },
    {
      threshold: 0.3,
      rootMargin: "-150px",
    }
  );
  eduObserver.observe(eduSection);
}

rotateArrows();
