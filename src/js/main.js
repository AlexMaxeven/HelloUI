import $ from "jquery";
import "slick-carousel";

// burger-menu - - -

$(function () {
        $('.header__burger').on('click', function () {
            $('.header__burger').toggleClass('active');
        });
        $('.header__burger').on('click', function () {
            $('.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
        $('a.header__link').on('click', function() {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top + "px"
            }, {
                duration: 3000,
                easing: "swing"
            });
            e.preventDefault();
            let url = $(e.target).attr('href');
            location.href = url;
            $('.header__burger').removeClass('active');
            $('body').removeClass('lock');
            return false;
        });
        $(document).on('click', '.header__list > li > a', e => {
            e.preventDefault();
            let url = $(e.target).attr('href');
            location.href = url;
            $('.header__burger').removeClass('active');
            $('body').removeClass('lock');
        });
        $(document).on('click', '.header__list > li > a', e => {
            e.preventDefault();
            let url = $(e.target).attr('href');
            location.href = url;
            $('.header__menu').removeClass('active');
            $('body').removeClass('lock');
        });
        $(".sell__slider").slick({
            dots: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
            
        });
        $(".review__inner").slick({
            responsive: [
                {
                    breakpoint: 3000,
                    settings: "unslick"
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                }
            ]
            
        });
    });