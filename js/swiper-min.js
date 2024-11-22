const swiper = new Swiper(".swiper-feedbacks", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, // Остановка при взаимодействии
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, // Остановка при взаимодействии
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

const swiperExample = new Swiper(".swiper-example", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 1600,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, // Остановка при взаимодействии
  },
  breakpoints: {
    4000: {
      slidesPerView: 3,
      spaceBetween: 56,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
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
