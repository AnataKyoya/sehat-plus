$(document).ready(function () {
    $(document).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $(".nav").removeClass("close");
        } else {
            $(".nav").addClass("close");
        }
    });

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});