
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        rtl: true,
        nav: true,
        loop: true,
        dots: false,
        autoWidth:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 7,

            }
        }
    })

    var owl = $('.owl-carousel-blog');
    owl.owlCarousel({
        rtl: true,
        nav: true,
        loop: true,
        dots: false,
        stagePadding : 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,

            }
        }
    })
})
