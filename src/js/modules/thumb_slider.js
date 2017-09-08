
$('.product_slider').slick({
    dots: false,
    infinite: true,

    speed: 600,
    slidesToShow: 4,
    arrows: true,
    draggable: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 694,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                /*autoplay: true*/
            }
        }
    ]
});

$('.learner_slider').slick({
    dots: true,
    infinite: true,

    speed: 600,
    slidesToShow: 2,
    arrows: true,
    draggable: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 694,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                /*autoplay: true*/
            }
        }
    ]
});