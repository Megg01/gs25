document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".own-carousel__container").ownCarousel({
        itemPerRow: 5,
        itemWidth: 20,
        
        nav: true,
        responsive: {
                1000: [4, 24],
                800: [3, 33],
                600: [2, 49],
                400: [1, 100],
        },
        });
        responsive();
});