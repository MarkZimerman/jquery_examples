$(function() {
		
    $('.menu a').on('click', function(e) {
            e.preventDefault(); // Disables HTML anchor native navigation

            var selector = $(this).attr('href'); // i.e.: #about
            var targetHeader = $(selector);

            // offset() returns an {object} with coordinates: top and left
            $('html, body').animate({
                    scrollTop: targetHeader.offset().top
            }, 400);

    });
});