/*
$(function() {
    $('.faqPair .question').on('click', function() {
        var answer = $(this).next();
        if (answer.css('display') === 'none')
            answer.slideDown(300);
        else
            answer.slideUp(300);
    });
});
*/

$(function() {

    var jqQuestions = $('.faqPair .question');
    var jqAnswers = $('.faqPair .answer');

    jqQuestions.on('click', function() {
        var currentAnswer = $(this).next();
        if (currentAnswer.css('display') === 'none') {
            currentAnswer.slideDown(300);
            jqAnswers.not(currentAnswer).slideUp(300);
        } else {
            currentAnswer.slideUp(300);
        }
    });
});