$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  responsiveClass: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
