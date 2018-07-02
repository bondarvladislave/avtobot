'use strict';

$(document).ready(function () {
    $('.datalist__item').click(function () {
        // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) {
            // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        $('.datalist__item').removeAttr("id"); //Удалить все id="active" с ссылок
        $(this).attr('id', 'active'); //Дать Active тому который кликнули
    });
    $('.data1__item').click(function () {
        // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) {
            // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
    });

    $('input[type="text"]').change(function () {
        if ($(this).val()) $(this).addClass('has__value');else $(this).removeClass('has__value');
    });

    $('.offers2 .btn,.offers3 .btn').click(function () {
        $('.offers2').toggle();
        $('.offers3').toggle();
    });

    $('.pay__item').click(function () {
        $('.pay__item').removeClass('pay__item-active');
        $(this).addClass('pay__item-active');
    });

    $('.block1__link1').click(function () {
        $('.vin-js').toggle(400);
    });
    $('.block1__link2,.popup1__black,.popup1__close').click(function () {
        $('.popup1').toggle(400);
    });

    $('.block3__info').click(function () {
        if ($(this).children('.block3__info-in').is(':hidden')) {
            $('.block3__info-in').hide();
            $('.block3__info').removeClass('block3__info-active');
            $(this).toggleClass('block3__info-active');
            $(this).children('.block3__info-in').toggle();
        } else {
            $('.block3__info-in').hide();
            $('.block3__info').removeClass('block3__info-active');
        }
    });
});