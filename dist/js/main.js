$(document).ready(function() {
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



    $(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        nav: true,
        navText: ['<svg class="icon icon-ico35"><use xlink:href="#icon-ico35"></use></svg> <span>предыдущая неделя</a>', '<span>следующая неделя</span> <svg class="icon icon-ico36"><use xlink:href="#icon-ico36"></use></svg>']
    });


    var pattern = $('.add__product_wrapper').find('.add__product--pattern').clone();








    $(function() {
        $(".f__item").click(function() {
            // remove classes from all
            $(".f__item").removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
        });
    });



    $('.scroll-pane').jScrollPane();
    $('.route__info').dotdotdot();

    // tools panel
    $('#tools_map').on('show.bs.tab', function(e) {
        $('.form-horizontal--inline').hide();
        $('.tools-pagination').show();
        $('.tools__panel--right').show();

    });
    $('#tools_table').on('show.bs.tab', function(e) {
        $('.form-horizontal--inline').show();
        $('.tools-pagination').hide();
        $('.tools__panel--right').hide();
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

    $(document).on('click', '.js_add_block', function() {
        var parent = $('.js_add_block').closest('.add__product_wrapper');
        //console.log(block);
        console.log(pattern);
        /*$(pattern)*/
        $(parent).append(pattern.clone().show());
        $('.selectpicker').selectpicker({
            dropupAuto: false
        });
    });


    $(document).on('click', '.js_delete_tr', function() {
        $(this).closest('.add__tr--dynamic').remove();

    });
    $(document).on('click', '.js__add_row', function() {
        var row = $(this).parents(".row").find('.js__add_row').closest('.add__tr--dynamic').clone().wrap('<div></div>').parent().html();
        $(this).closest('.add__tr').after(row);

    });
    $(document).on('click', '.js_add_size', function() {
        var parent_size = $('.add__info').closest('.add__info--wr');
        var info = $(this).parents(".add__info--wr").find('.add__info:first-child').clone();

        $(parent_size).append(info.clone());

    });

    $(document).on('click', '.js_delete_size', function() {
        $(this).closest('.add__info').remove();
        if ($('.js_delete_size').closest('.add__info').length < 1) {
            $('.js_delete_size').remove();
        }
        console.log($(this).closest('.add__info').length);
    });


    // Bootstrap select
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });


    var val_first = $('.add__size_block input').val();
    $('.add__table_td_size').text(val_first);




    var val_price_first = $('.add__price_td_f1 input').val();
    $('.add__price_view').text(val_price_first);





    $('.add__size_block input').on('keyup', function() {
        var value = $(this).val();
        $('.add__table_td_size').text(value);
    });

    $('.add__price_td_f1 input').on('keyup', function() {
        var value = $(this).val();
        $('.add__price_view').text(value);
    });

    $('.add__price_td_f2 input').on('keyup', function() {
        var value = $(this).val();

    });


    

});



/**
Product preview
**/
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#img__preview').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
        console.log(e.target.result);
    }
}
$("#label").change(function() {
    readURL(this);
});

$('.add__brand select').on('changed.bs.select', function(e) {
    var prod_name = $(this).closest('.add__product').find('.add__brand .filter-option').text();

    $('.add__name').text(prod_name);
});











// Same height blocks

jQuery(function() {
    initSameHeight();
});



function initSameHeight() {
    jQuery('.column__row').sameHeight({
        elements: '.column__left, .column__right',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
};
(function($) {
    $.fn.sameHeight = function(opt) {
        var options = $.extend({
            skipClass: 'same-height-ignore',
            leftEdgeClass: 'same-height-left',
            rightEdgeClass: 'same-height-right',
            elements: '>*',
            flexible: false,
            multiLine: false,
            useMinHeight: false,
            biggestHeight: false
        }, opt);
        return this.each(function() {
            var holder = $(this),
                postResizeTimer, ignoreResize;
            var elements = holder.find(options.elements).not('.' + options.skipClass);
            if (!elements.length) return;

            function doResize() {
                elements.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', '');
                if (options.multiLine) {
                    resizeElementsByRows(elements, options);
                } else {
                    resizeElements(elements, holder, options);
                }
            }
            doResize();
            var delayedResizeHandler = function() {
                if (!ignoreResize) {
                    ignoreResize = true;
                    doResize();
                    clearTimeout(postResizeTimer);
                    postResizeTimer = setTimeout(function() {
                        doResize();
                        setTimeout(function() {
                            ignoreResize = false;
                        }, 10);
                    }, 100);
                }
            };
            if (options.flexible) {
                $(window).bind('resize orientationchange fontresize', delayedResizeHandler);
            }
            $(window).bind('load', delayedResizeHandler);
        });
    };
    var supportMinHeight = typeof document.documentElement.style.maxHeight !== 'undefined';

    function resizeElementsByRows(boxes, options) {
        var currentRow = $(),
            maxHeight, maxCalcHeight = 0,
            firstOffset = boxes.eq(0).offset().top;
        boxes.each(function(ind) {
            var curItem = $(this);
            if (curItem.offset().top === firstOffset) {
                currentRow = currentRow.add(this);
            } else {
                maxHeight = getMaxHeight(currentRow);
                maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
                currentRow = curItem;
                firstOffset = curItem.offset().top;
            }
        });
        if (currentRow.length) {
            maxHeight = getMaxHeight(currentRow);
            maxCalcHeight = Math.max(maxCalcHeight, resizeElements(currentRow, maxHeight, options));
        }
        if (options.biggestHeight) {
            boxes.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', maxCalcHeight);
        }
    }

    function getMaxHeight(boxes) {
        var maxHeight = 0;
        boxes.each(function() {
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });
        return maxHeight;
    }

    function resizeElements(boxes, parent, options) {
        var calcHeight;
        var parentHeight = typeof parent === 'number' ? parent : parent.height();
        boxes.removeClass(options.leftEdgeClass).removeClass(options.rightEdgeClass).each(function(i) {
            var element = $(this);
            var depthDiffHeight = 0;
            var isBorderBox = element.css('boxSizing') === 'border-box' || element.css('-moz-box-sizing') === 'border-box' || '-webkit-box-sizing' === 'border-box';
            if (typeof parent !== 'number') {
                element.parents().each(function() {
                    var tmpParent = $(this);
                    if (parent.is(this)) {
                        return false;
                    } else {
                        depthDiffHeight += tmpParent.outerHeight() - tmpParent.height();
                    }
                });
            }
            calcHeight = parentHeight - depthDiffHeight;
            calcHeight -= isBorderBox ? 0 : element.outerHeight() - element.height();
            if (calcHeight > 0) {
                element.css(options.useMinHeight && supportMinHeight ? 'minHeight' : 'height', calcHeight);
            }
        });
        boxes.filter(':first').addClass(options.leftEdgeClass);
        boxes.filter(':last').addClass(options.rightEdgeClass);
        return calcHeight;
    }
}(jQuery));
jQuery.onFontResize = (function($) {
    $(function() {
        var randomID = 'font-resize-frame-' + Math.floor(Math.random() * 1000);
        var resizeFrame = $('<iframe>').attr('id', randomID).addClass('font-resize-helper');
        resizeFrame.css({
            width: '100em',
            height: '10px',
            position: 'absolute',
            borderWidth: 0,
            top: '-9999px',
            left: '-9999px'
        }).appendTo('body');
        if (window.attachEvent && !window.addEventListener) {
            resizeFrame.bind('resize', function() {
                $.onFontResize.trigger(resizeFrame[0].offsetWidth / 100);
            });
        } else {
            var doc = resizeFrame[0].contentWindow.document;
            doc.open();
            doc.write('<scri' + 'pt>window.onload = function(){var em = parent.jQuery("#' + randomID + '")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};</scri' + 'pt>');
            doc.close();
        }
        jQuery.onFontResize.initialSize = resizeFrame[0].offsetWidth / 100;
    });
    return {
        trigger: function(em) {
            $(window).trigger("fontresize", [em]);
        }
    };
}(jQuery));












































































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

$('.column').selectable({
    cancel: '.handle, .route-footer, .portlet-remove',
    filter: ".portlet",
    selected: function(event, ui) {
        countClick++;
        if (!(window.event.ctrlKey) && !(window.event.shiftKey)) {
            $('.portlet').removeClass('ui-selected');
        }
    }
});




$('.column').sortable({

    connectWith: ".column",
    handle: ".handle",
    items: ".portlet",
    stop: function(e, ui) {
        var selected = ui.item.data('multidrag');
        ui.item.after(selected);
        ui.item.remove();
        $('.portlet-remove').on("click", function() {
            var start = $(this).closest('.column .portlet').remove();
            $('.start-column').append(start);

        });
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



$('#check-2').on('change', function() {
    if ($(this).is(':checked')) {
        $('.column__left .portlet').each(function() {
            $(this).addClass('ui-selected');
        });
    } else {
        $('.column__left .portlet').each(function() {
            $(this).removeClass('ui-selected');
        });
    }
});


