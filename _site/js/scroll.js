$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

$("body").on("click", ".navbar-collapse a", function() {
    var $this = $(this);

    setTimeout(function() {
        $this.closest(".navbar-collapse").collapse('hide');
    }, 650);
});
