$(function () {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
                items: 5,
                margin: 10,
                autoplay:true,
                loop: true,
                nav: true,
                navText: [$('.product-card-left'),$('.product-card-right')],
                responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                }
        });
});
