$(document).ready(function () {
    setTimeout(function () {
        $(".section-mv").addClass("animate");
        $("header").addClass("is-show");
    }, 1000);

    let lastScrollTop = $(window).scrollTop();
    let scrollTimeout;
    var wh = document.documentElement.clientHeight;
    $(window).scroll(function () {
        HeaderShow();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(addClassToHeader, 1000);
        $(".fadeIn").each(function (i, el) {
            var currentElement = $(this);
            if (currentElement.offset().top < lastScrollTop + wh * 0.85) {
                currentElement.addClass("show");
            }
        });
    });
    function HeaderShow() {
        var headerHeight = $("header").innerHeight() + 38;
        var scrollTop = $("header").innerHeight() + $(this).scrollTop();

        if (scrollTop > headerHeight) {
            const scrollTopPosition = $(this).scrollTop();

            if (scrollTopPosition > lastScrollTop) {
                $("header").removeClass("is-show");
            } else if (scrollTopPosition < lastScrollTop) {
                $("header").removeClass("is-show");
            }

            lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
        }
    }

    function addClassToHeader() {
        $("header").addClass("is-show");
    }
    $(window).on("beforeunload", function () {
        $(window).scrollTop(0);
    });

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    {
                        duration: 500,
                        easing: "swing",
                    }
                );
                return false;
            }
        }
    });

    $(".partner-card-list").slick({
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".testimonials-list").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    });

    $(".prev-btn").click(function () {
        $(".testimonials-list").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".testimonials-list").slick("slickNext");
    });

    $(".icon-list01").slick({
        dots: false,
        arrows: false,
        infinite: true,
        infinite: true,
        centerMode: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    
    $(".icon-list02").slick({
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
