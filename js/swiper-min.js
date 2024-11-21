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

const swiperPartners = new Swiper(".swiper-partners", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,

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
