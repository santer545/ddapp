$(document).ready(function() {
    $(".js__arrow").click(function() {
        $(".sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });
    $('.selectpicker').selectpicker();


    var a = $('.js-detail').attr('aria-expanded');
    if (a == 'true') {
        $('.js-detail').html('Скрыть');
    }

    $('.js-editing input, .js-editing button, .js-editing textarea').attr('disabled', 'disabled');
    $('.js-edit').click(function() {
        $('.js-editing input, .js-editing button, .js-editing textarea').removeAttr('disabled');
    });
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['data1', 500, 1000, 1500, 2000],
            ]
        }
    });
});
