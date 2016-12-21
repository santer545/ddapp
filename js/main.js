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
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            items: 1,
            mouseDrag: false,
            nav: true,
            navText: ['<svg class="icon icon-ico35"><use xlink:href="#icon-ico35"></use></svg> <span>предыдущая неделя</a>', '<span>следующая неделя</span> <svg class="icon icon-ico36"><use xlink:href="#icon-ico36"></use></svg>']
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
        }
    }
    $("#file").change(function() {
        readURL(this);
    });

    $('#product-name').on('changed.bs.select', function(e) {
        var prod_name = $('[data-id="product-name"] .filter-option').text();
        console.log(prod_name);
        $('.add__name').html(prod_name);
    });


    /*$('.scroll-pane').jScrollPane();*/
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



    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        initSameHeight();
    });

    $('#collapseExample').on('hidden.bs.collapse', function() {
        initSameHeight();
    });
    $('#collapseExample').on('shown.bs.collapse', function() {
        initSameHeight();
    });

});





jQuery(function() {
    initSameHeight();
});



function initSameHeight() {
    jQuery('.wrapper').sameHeight({
        elements: '.content, .sidebar',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
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






$(function() {





    $('.column').bind("mousedown", function(e) {
        e.metaKey = false;
    }).selectable({
        cancel: '.handle, .route-footer, .portlet-remove',
        filter: ".portlet",
        selected: function(event, ui) {
            if (!window.event.ctrlKey) {
                $('.portlet').removeClass('ui-selected');
            }

        }
    }).find(".portlet").prepend("<div class='handle'></div>");




    $('.column').sortable({
        cursorAt: {
            top: 0,
            left: 0
        },
        placeholder: "li-placeHolder",
        connectWith: ".column",
        items: ".portlet",
        handle: '.handle',
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
        stop: function(e, ui) {
            var selected = ui.item.data('multidrag');
            ui.item.after(selected);
            ui.item.remove();
            $('.portlet-remove').on("click", function() {
                var start = $(this).closest('.column .portlet').remove();
                $('.start-column').append(start);

            });
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

    $('.portlet').click(function() {

        $('.portlet').removeClass('ui-selected');

    });












});
