var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide: 1,
  bulletActiveClass: 'swiper-pagination-bullet-active',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },
   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3
    }
  },
});