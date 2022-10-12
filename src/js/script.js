$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/screen4_icon_chevron-left1-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/screen4_icon_chevron-right2-solid.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});