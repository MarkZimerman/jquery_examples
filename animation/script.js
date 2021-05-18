$(function () {

    $('.item1').on('click', function () {
        $(this).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    });

    $('.item2').on('click', function () {
        $(this).stop(true, true).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    });

    $('.item3').on('contextmenu', function (e) {
        e.preventDefault();
        $(this)
            .animate({ height: 100 }, 500)
            .animate({ opacity: 0.5 }, 500);
    });

    $('.item4').on('click', function () {
        $(this).animate({
            height: 100,
            opacity: 0.5
        }, 500);
    });

    $('.item5').one('click', function () {
        $(this).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    });

});