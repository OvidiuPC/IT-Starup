// Navigation X effect
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();

// ------

$(".card-carousel").owlCarousel({
  margin: 10,
  loop: true,
  // autoplay:true,
  // autoplayTimeout:2000,
  // autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    500: {
      items: 2,
      nav: false,
    },
    700: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
    1400: {
      items: 5,
      nav: false,
    },
  },
});
// ===============
$(".card-work-carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    500: {
      items: 2,
      nav: false,
    },
    700: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
    1400: {
      items: 4,
      nav: false,
    },
  },
});
