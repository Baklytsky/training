'use strict';

jQuery(function ($) {
    $(document).ready(function () {

//-------------------------------- Feather icons ------------------------------------
        feather.replace()
//----------------------------- Main nav on scroll ----------------------------------

        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $('header').addClass("fixed-header");
            } else {
                $('header').removeClass("fixed-header");
            }
        });
//-------------------------- Burger btn action --------------------------------------

        $('.burger-icon').click(function () {
            $('.burger-icon').toggleClass('burger-icon-active')
            $('.main-nav-menu').toggleClass('mobile-menu-active')
            $("body").toggleClass('delete-scroll');
        });

//-------------------------- Benefits slider ----------------------------------------

        $('.benefits-slide-list').slick({
            dots: true,
            infinity: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            customPaging: function (slider, i) {
                return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        fade: false,
                    }
                },
            ]
        });

//------------------------------ FAQ accordion ----------------------------------------

        $(".accordion-content:eq(0)").show();
        $(".accordion-title:eq(0)").toggleClass("accordion-active");
        $('.accordion-arrow:eq(0)').toggleClass('accordion-rotate');

        $(".accordion-title").on("click", function(e) {
            e.preventDefault();
            let $this = $(this);

            if (!$this.hasClass("accordion-active")) {
                $(".accordion-content").slideUp(400);
                $(".accordion-title").removeClass("accordion-active");
                $('.accordion-arrow').removeClass('accordion-rotate');
            } else {
                return;
            }

            $this.toggleClass("accordion-active");
            $this.next().slideToggle();
            $('.accordion-arrow',this).toggleClass('accordion-rotate');
        });

    });
});
