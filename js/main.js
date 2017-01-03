$(document).ready(function() {

    // Раскрытие левого меню
    $(".js__arrow").click(function() {
        $(".sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });


    $(".load__small").click(function() {
        $(this).toggleClass("active");
    });




    var a = $('.js-detail').attr('aria-expanded');
    if (a == 'true') {
        $('.js-detail').html('Скрыть');
    }

    // Tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip('show');
    })

    $('.tools__delete').click(function() {
        $(this).closest('.tools__editing_item').remove();
    });

    // Вызов карусели на странице редактирования маршрутов
    $(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        nav: true,
        navText: ['<svg class="icon icon-ico35"><use xlink:href="#icon-ico35"></use></svg> <span>предыдущая неделя</a>', '<span>следующая неделя</span> <svg class="icon icon-ico36"><use xlink:href="#icon-ico36"></use></svg>']
    });


    // Вызов кастомного скролла
    $('.scroll-pane').jScrollPane();

    // Обрезка текста многоточием
    $('.route__info').dotdotdot();

    // tools panel
    $('#tools_map').on('show.bs.tab', function(e) {
        $('.form-horizontal--inline').show();
        $('.tools-pagination').hide();
        $('.tools__panel--right').hide();

    });
    $('#tools_table').on('show.bs.tab', function(e) {
        $('.form-horizontal--inline').hide();
        $('.tools-pagination').show();
        $('.tools__panel--right').show();
    });




    // Same height

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        initSameHeight();
    });

    $('#collapseExample').on('hidden.bs.collapse', function() {
        initSameHeight();
    });
    $('#collapseExample').on('shown.bs.collapse', function() {
        initSameHeight();
    });
    // Bootstrap select
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });


    // Добавление брендлайна
    initAddBrandline();

    // Добавление строки с ценой
    initAddRow();

    //Добавление размера к брендлайну
    initAddSize();

    // Удаление строки с ценой
    initDeleteTr();

    // Удаление размера брендлайна
    initDeleteSize();

    // Переключение цен
    togglePrice();

    // Пересчет маршрутов в колонке
    initCheckedPortlets();

    //Выделение маршрутов
    initSelectable();

    // Перетаскивание маршрутов
    initSortable();

    // переключение форм в модальном окне
    initModalForm();

    // Вызов модального окна в маршруте
    initModalOnPortlets();







    // установка начальных значений в предпросмотре
    var val_first = $('.add__size_block input').val();
    $('.add__table_td_size').text(val_first);




    var val_price_first = $('.add__price_td_f1 input').val();
    var val_price_second = $('.add__price_td_f2 input').val();
    $('.add__price_view--f1').text(val_price_first);
    $('.add__price_view--f2').text(val_price_second);





    $('.add__size_block input').on('keyup', function() {
        var value = $(this).val();
        $('.add__table_td_size').text(value);
    });

    /*$('.add__price_td_f1 input').on('keyup', function() {
        var value = $(this).val();
        $('.add__price_view').text(value);
    });

    $('.add__price_td_f2 input').on('keyup', function() {
        var value = $(this).val();
    });*/


});







// Добавление строки с ценой
function initAddRow() {
    $(document).on('click', '.js__add_row', function() {
        var row = $(this).parents(".row").find('.js__add_row').closest('.add__tr--dynamic').clone().wrap('<div></div>').parent().html();

        $(this).closest('.add__tr').after(row);

        $(this).closest('.add__tr').next('.add__tr').find('.add__size_block input').remove();

        $(this).closest('.add__product').find('.preview__table').append('<div class="preview__table_tr"><div class="add__table_td_size preview__table_td"></div><div class="preview__table_td"></div><div class="preview__table_td add__price_view add__price_view--f1"></div><div class="preview__table_td add__price_view add__price_view--f2"></div></div>');


        var number_tr = $(this).closest('.add__tr--dynamic').index();



        var f1 = $(this).closest('.add__tr').find('.add__price_td_f1 input').val();

        var f2 = $(this).closest('.add__tr').find('.add__price_td_f2 input').val();

        $(this).closest('.add__product').find('.preview__table').each(function(element) {
            $(element).find('.preview__table_tr:eq(' + number_tr + ')').find('.add__price_view--f1').text(f1);
            element ++;
            console.log(element);
        });


    });

}

//Добавление блока размера
function initAddSize() {
    $(document).on('click', '.js_add_size', function() {
        var parent_size = $(this).closest(".add__product_wrapper").find('.add__product--pattern').find('.add__info:first-child').clone().wrap('<div></div>').parent().html();
        $(parent_size).insertBefore(this);
        $(this).closest('.add__product').find('.add__info--view').append('<div class="preview__table"><div class="preview__table_tr"><div class="add__table_td_size preview__table_td"></div><div class="preview__table_td"></div><div class="preview__table_td add__price_view add__price_view--f1"></div><div class="preview__table_td add__price_view add__price_view--f2"></div></div></div>');



        var number_tr = $(this).closest('.add__tr--dynamic').index();
        /*$(this).closest('.add__product').find('.preview__table').find('.preview__table_tr:eq(' + number_tr + ')');*/

        var f1 = $(this).closest('.add__info--wr').find('.add__tr').find('.add__price_td_f1 input').val();
        var f2 = $(this).closest('.add__info--wr').find('.add__tr').find('.add__price_td_f2 input').val();
        var sz = $(this).closest('.add__info--wr').find('.add__info').find('.add__size_block input').val();
        console.log(sz);
        $(this).closest('.add__product').find('.preview__table:eq(' + number_tr + ')').find('.add__price_view--f1').text(f1);
        $(this).closest('.add__product').find('.preview__table:eq(' + number_tr + ')').find('.add__price_view--f2').text(f2);
        $(this).closest('.add__product').find('.preview__table').find('.preview__table_tr:eq(0)').find('.add__table_td_size').text(sz);

    });

}

// добавление брендлайна
function initAddBrandline() {
    var pattern = $('.add__product_wrapper').find('.add__product--pattern').clone();
    $(document).on('click', '.js_add_block', function() {
        var parent = $('.js_add_block').closest('.add__product_wrapper');
        $(pattern).addClass('add__product').removeClass('add__product--pattern');
        $(parent).append(pattern.clone().show());
    });
}

// удаление строки с ценой
function initDeleteTr() {
    $(document).on('click', '.js_delete_tr', function() {
        var parent = $(this).closest('.add__info');

        var number_tr = $(this).closest('.add__info').find('.add__tr--dynamic').index();
        $(this).closest('.add__product').find('.preview__table').find('.preview__table_tr:eq(' + number_tr + ')').remove();
        if (parent.find('.add__tr--dynamic').length > 1) {
            $(this).closest('.add__tr--dynamic').remove();
        }

    });
}

// удаление размера
function initDeleteSize() {
    $(document).on('click', '.js_delete_size', function() {
        var parent = $(this).closest('.add__product');
        var number_size = $(this).find('.add__info').index();
        console.log(number_size);
        $(this).closest('.add__product').find('.preview__table:eq(' + number_size + ')').remove();

        if (parent.find('.add__info').length > 1) {
            $(this).closest('.add__info').remove();
        }
    });
}

// переключение между ценами
function togglePrice() {
    $(document).on('click', '.f__item', function() {
        // remove classes from all
        $(".f__item").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
        var parent = $(this).closest('.add__product');
        if ($(this).is('#id_f2')) {
            parent.find('.add__price_view--f1').hide();
            parent.find('.add__price_view--f2').css('display', 'inline-block');
        } else {
            parent.find('.add__price_view--f1').css('display', 'inline-block');
            parent.find('.add__price_view--f2').hide();
        }
    });
}







$('.add__brand select').on('changed.bs.select', function(e) {
    var prod_name = $(this).closest('.add__product').find('.add__brand .filter-option').text();

    $('.add__name').text(prod_name);
});





var countClick = 0;
$('.portlet').on('mouseover', function() {
    if (!(window.event.ctrlKey) && !(window.event.shiftKey)) {
        $('.handle').css('z-index', '2').focus();
        $('.handle').trigger('mousedown');
    } else {
        $('.handle').css('z-index', '0');
        $('.portlet').focus();
    }
});


function initSelectable() {

    $('.column').selectable({
        cancel: '.handle, .route-footer, .portlet-remove, .copy',
        filter: ".portlet",
        selected: function(event, ui) {
            countClick++;
            if (!(window.event.ctrlKey) && !(window.event.shiftKey)) {
                $('.portlet').removeClass('ui-selected');
            }
        },
        stop: function(event, ui) {
            $('#check-2').prop('checked', false);
            var lg_checked = $('.column__left').find('.portlet.ui-selected').length;
            $('.js_checked_portlets').text(lg_checked);
        }
    });
}


function initSortable() {

    $('.column').sortable({

        connectWith: ".column",
        handle: ".handle",
        items: ".portlet",
        stop: function(e, ui) {
            var selected = ui.item.data('multidrag');
            ui.item.after(selected);
            ui.item.remove();


            $('.column__right .column').each(function() {
                if (($(this).find('.portlet').length) == 0) {
                    $(this).find('.portlet__number_item').text('0');
                } else {
                    var lg = $(this).find('.portlet').length;
                    $(this).find('.portlet').closest('.column').find('.portlet__number_item').text(lg);
                }
            });


            $('.portlet-remove').on("click", function() {
                var lg_del = $(this).closest('.column__right .column').find('.portlet').length;
                if (lg_del == 0) {
                    $(this).closest('.column').find('.portlet__number_item').text('0');
                }
                $(this).closest('.column').find('.portlet__number_item').text(lg_del - 1);
                var start = $(this).closest('.column .portlet').remove();
                $('.start-column').append(start);

            });


            $('#check-2').prop('checked', false);


        },


        helper: function(e, item) {
            if (!item.hasClass('ui-selected')) {
                $('.column').find('.ui-selected').removeClass('ui-selected');
                item.addClass('ui-selected');
            }

            var selected = $('.ui-selected').clone();
            item.data('multidrag', selected);
            $('.ui-selected').not(item).remove();
            return $('<div class="transporter"></div>').append(selected);
        },
        change: function(e, ui) {
            $('.portlet').removeClass('ui-selected');
        },
        start: function(e, ui) {
            $('.portlet').removeClass('ui-selected');
        }
    }).disableSelection();

}

function initCheckedPortlets() {

    var lg = $('.column__left .portlet').length;
    $('.js_all_portlets').text(lg);
    var lg_checked = $('.column__left').find('.portlet.ui-selected').length;
    $('.js_checked_portlets').text(lg_checked);

    $('#check-2').on('change', function() {
        if ($(this).is(':checked')) {
            $('.column__left .portlet').each(function() {
                $(this).addClass('ui-selected');
                var lg_checked = $('.column__left').find('.portlet.ui-selected').length;
                $('.js_checked_portlets').text(lg_checked);
            });
        } else {
            $('.column__left .portlet').each(function() {
                $(this).removeClass('ui-selected');
                $('.js_checked_portlets').text('0');
            });
        }
    });
}

function initModalOnPortlets() {
    $('.copy').click(function() {
        console.log('Click!!');
        $('#editModal').modal('show');
    });
}


function initModalForm() {
    $('#form__unchecked').hide();
    $('#modal-checked').change(function() {
        var bool = $(this).prop('checked');
        console.log(bool);
        if (!bool) {
            $('#form__checked').show();
            $('#form__unchecked').hide();
        } else {
            $('#form__checked').hide();
            $('#form__unchecked').show();
        }
    });
}
