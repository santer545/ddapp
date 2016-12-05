$(document).ready(function() {
    $(".js__arrow").click(function() {
        $(".sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });
    $('.selectpicker').selectpicker();

});
