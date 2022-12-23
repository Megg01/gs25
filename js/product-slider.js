var swiper = new Swiper(".slider-img", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
                delay: 6000,
        }
})

var swiper = new Swiper(".product-cards", {
        speed:1000,
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        autoplay: {
                delay: 5000,
        },
        rewind: true,
        navigation: {
                nextEl: ".product-card-right",
                prevEl: ".product-card-left",
        },
        breakpoints: {
                0: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                },
                450: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                },
                767: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                },
                1120: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                }
        }
});
var swiper = new Swiper(".product-bonus-cards", {
        speed:1000,
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        autoplay: {
                delay: 5000,
        },
        rewind: true,
        navigation: {
                nextEl: ".product-bonus-card-right",
                prevEl: ".product-bonus-card-left",
        },
        breakpoints: {
                0: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                },
                450: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                },
                767: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                },
                1120: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                }
        }
});