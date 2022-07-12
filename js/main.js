let ww = window.innerWidth;
let swiper;

responsiveSwiper();

function initSwiper(effect) {
  if (typeof swiper == "object") swiper.destroy();

  return (swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    roundLengths: true,
    slidesPerView: "2",
    loopAdditionalSlides: 1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: effect,
    coverflowEffect: {
      rotate: 0,
      stretch: 500,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      0: {
        slidesPerView: "1",

      },
      480: {
        slidesPerView: "1",

      },

      768: {
        slidesPerView: "1",

      },
      1024: {
        slidesPerView: "1",

      },
      1200: {
        slidesPerView: "2",
        coverflowEffect: {
          stretch: 310,
          slideShadows: true,
        },
        speed: 600,
        autoplay: {
          delay: 3000,
        },
      },
    },
  }));
}

function responsiveSwiper() {
  if (ww >= 1200) {
    // coverflow 효과
    initSwiper("coverflow");
  } else if (ww < 1200) {
    // slide 효과
    initSwiper("slie");
  }
}

window.addEventListener("resize", function () {
  ww = window.innerWidth;
  responsiveSwiper();
});

