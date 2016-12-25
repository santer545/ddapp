$(document).ready(function() {
    $(".js__arrow").click(function() {
        $(".sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });
    $(".load__small").click(function() {
        $(this).toggleClass("active");
    });
    // Bootstrap select
    $('.selectpicker').selectpicker({
        dropupAuto: false
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

    var pattern = `main.js:105 <div class="add__product">
                                <div class="row">
                                    <div class="col-md-8 col-sm-8 col-xs-8">
                                        <p class="add__heading">Заполните данные</p>
                                        <div class="add__item">
                                            <input type="file" name="file" id="file" class="inputfile">
                                            <div class="load__small js-color">
                                                <svg class="icon icon-plus icon__gray">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                                                </svg>
                                            </div>
                                            <label for="file" class="load__img">
                                                <div class="load__holder">
                                                    <svg class="icon icon-plus icon__gray">
                                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                                                    </svg>
                                                    <span>Загрузить фото</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="add__brand">
                                            <div class="row">
                                                <div class="col-md-3 col-sm-3 col-xs-3">
                                                    <label for="product-name" class="control-label control-label--big">Брендлайн</label>
                                                </div>
                                                <div class="col-md-9 col-sm-9 col-xs-9">
                                                    <div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="product-name" title="Модель 213 рисунок 1220, голубой"><span class="filter-option pull-left">Модель 213 рисунок 1220, голубой</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">Модель 213 рисунок 1220, голубой</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Модель 213 рисунок 20, неголубой</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Модель 213 рисунок 0, гоголубой</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Модель 213 рисунок 1, неголубой</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select name="" id="product-name" class="selectpicker" tabindex="-98">
                                                        <option value="">Модель 213 рисунок 1220, голубой</option>
                                                        <option value="">Модель 213 рисунок 20, неголубой</option>
                                                        <option value="">Модель 213 рисунок 0, гоголубой</option>
                                                        <option value="">Модель 213 рисунок 1, неголубой</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add__info">
                                            <div class="add__tr">
                                                <div class="add__th add__size_block add__size_blcok--th">Размер</div>
                                                <div class="add__th add__price_category add__price_category--th">Ценовая категория</div>
                                                <div class="add__th add__price add__price--th">Ф1</div>
                                                <div class="add__th add__price add__price--th">Ф2</div>
                                                <div class="add__th add__plus"></div>
                                                <div class="add__th">
                                                    <div class="add__delete js_delete_tr">
                                                        <svg class="icon icon-ico33 icon__gray">
                                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ico33"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="add__tr add__tr--dynamic">
                                                <div class="add__td add__size_block add__size_block--td">
                                                <input type="text" class="form-control form-control--size" value="21-23">
                                                </div>
                                                <div class="add__td add__price_category add__price_category--td">
                                                    <div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="" title="минимаркет"><span class="filter-option pull-left">минимаркет</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">минимаркет</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">HoReca</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select name="" class="selectpicker" tabindex="-98">
                                                        <option value="">минимаркет</option>
                                                        <option value="">HoReca</option>
                                                    </select></div>
                                                </div>
                                                <div class="add__td add__price add__price--td">
                                                    <input type="text" class="form-control--table form-control" value="6 112, 45">
                                                </div>
                                                <div class="add__td add__price add__price--td">
                                                    <input type="text" class="form-control--table form-control" value="6 112, 45">
                                                </div>
                                                <div class="add__plus add__td">
                                                    <div class="add__holder add__holder--big js__add_row">
                                                        <svg class="icon icon-plus">
                                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="add__td">
                                                    <div class="add__delete js_delete_tr">
                                                        <svg class="icon icon-ico33 icon__gray">
                                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ico33"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add__size text-center js_add_size">
                                            добавить размер
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-4">
                                        <p class="add__heading">Предпросмотр</p>
                                        <div class="add__view">
                                            <ul class="f__list">
                                                <li id="id_f1" class="f__item active">Ф1</li>
                                                <li id="id_f2" class="f__item">Ф2</li>
                                            </ul>
                                            <ul class="color__list">
                                                <li class="color__item active js-color"></li>
                                            </ul>
                                            <figure>
                                                <img id="img__preview" src="" alt="">
                                            </figure>
                                        </div>
                                        <div class="add__name">
                                            Модель 321 - рисунок 1220, голубой
                                        </div>
                                        <div class="add__info--view">
                                            <table class="add__table">
                                                <tbody><tr>
                                                    <th class="add__table_th">Размер</th>
                                                    <th class="add__table_th">Кол-во</th>
                                                    <th class="add__table_th">Цена</th>
                                                </tr>
                                                <tr>
                                                    <td class="add__table_td">21-23</td>
                                                    <td class="add__table_td"><span class="preview__number bordered">0</span></td>
                                                    <td class="add__table_td">12,35</td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    /*var pattern = $('.add__product_wrapper').find('.add__product:first-child').clone().wrap('<div></div>').parent().html();*/

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

        $('.add__name').html(prod_name);
    });




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

    $('.add__product_wrapper').on('click', '.js_add_block', function() {
        var parent = $('.js_add_block').closest('.add__product_wrapper');
        //console.log(block);
        console.log(pattern)
        $(parent).append(pattern);
    });


    $('.add__info').on('click', '.js_delete_tr', function() {
        $(this).closest('.add__tr--dynamic').remove();
        console.log(this);
    });
    $('.add__info').on('click', '.js__add_row', function() {
        var row = $('.js__add_row').closest('.add__tr--dynamic').clone().wrap('<div></div>').parent().html();
        $(this).closest('.add__tr').after(row);

    });
    $('.add__product_wrapper').on('click', '.js_add_size', function() {
        var info = $(this).siblings('.add__info:eq(0)').clone();
        $('.add__info').after(info);
    });

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




// initialize on multiple elements with jQuery
$('.js-color').each(function(i, elem) {
    var hueb = new Huebee(elem, {
        // options
        setText: false,
        setBGColor: '.color__item'
    });
});