const swiper = new Swiper(".heroslider", {
  spaceBetween: 30,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  
  },
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
