var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        loop: true,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        breakpoints: {
                0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                },
                450: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                },
                600: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                },
                1120: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                },
        },
});
