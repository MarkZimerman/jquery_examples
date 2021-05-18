$(function () {

    var slider = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        automatic: true,
        changeInterval: 5000
    });

    var slider2 = new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        automatic: false
    });
});

function Slider(config) {

    this.jqImages = $(config.images);

    this.changeInterval = config.changeInterval || 0;
    var i = 0;
    var slider = this;

    this.showPrevious = function () {
        slider.jqImages.eq(i--).removeClass('showed');
        if (i < 0) i = slider.jqImages.length - 1;
        slider.jqImages.eq(i).addClass('showed');
    }

    this.showNext = function () {
        slider.jqImages.eq(i++).removeClass('showed');
        if (i >= slider.jqImages.length) i = 0;
        slider.jqImages.eq(i).addClass('showed');
    }

    $(config.btnNext).on('click', slider.showNext);
    $(config.btnPrev).on('click', slider.showPrevious);

    if (config.automatic) {

        if (!isNaN(slider.changeInterval) && slider.changeInterval > 0) {
            setInterval(slider.showNext, slider.changeInterval);
        } else {
            console.error('Incorrect slider interval');
        }
    }
}