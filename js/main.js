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
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        nav: true,
        navText: ['<svg class="icon icon-ico35"><use xlink:href="#icon-ico35"></use></svg> предыдущая неделя', 'следующая неделя <svg class="icon icon-ico36"><use xlink:href="#icon-ico36"></use></svg>']
      });
    });
});
