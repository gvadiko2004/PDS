const swiper = new Swiper(".swiper-feedbacks", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true, 
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".btns-swiper-prev",
    prevEl: ".btns-swiper-next",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
